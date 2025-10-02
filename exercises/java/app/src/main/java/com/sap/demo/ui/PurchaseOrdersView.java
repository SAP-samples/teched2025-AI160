package com.sap.demo.ui;

import com.google.common.base.Strings;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderScheduleLine;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.function.SerializableBiConsumer;
import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.DetachEvent;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.html.Div;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.LocalDateTime;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Timer;
import java.util.TimerTask;
import java.util.TreeSet;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicReference;

import static java.util.stream.Collectors.joining;

@Route("")
public class PurchaseOrdersView extends VerticalLayout {

  @Autowired
  private final PurchaseOrderMonitoringService monitoringService;

  private HorizontalLayout heading;
  private TextField commandInput;
  private Button submitButton;
  private HorizontalLayout userInput;
  private Grid<PurchaseOrderItem> itemsGrid;
  private Div emptyStateMessage;
  private PromptModal modal;
  private final TreeSet<PurchaseOrderItem> readings =
      new TreeSet<>(
          Comparator.comparing(PurchaseOrderItem::getPurchaseOrder)
              .thenComparing(PurchaseOrderItem::getPurchaseOrderItem));
  private LoadingScreen loadingScreen;
  private LoadingScreen escalationScreen;
  private boolean isFirstDataReceived = false;

  private static final SerializableBiConsumer<Span, PurchaseOrderItem> purchaseOrderDate =
      (span, item) -> {
        item.getScheduleLineOrFetch().stream().findFirst().map(PurchaseOrderScheduleLine::getScheduleLineDeliveryDate).map(LocalDateTime::toLocalDate).ifPresent(date -> {
                  var theme = "badge " + (date.isBefore(LocalDate.now()) ? "error" : "success");
                  span.getElement().setAttribute("theme", theme);
                  span.setText(date.toString());
                });
      };

  public PurchaseOrdersView(PurchaseOrderMonitoringService monitoringService) {
    this.monitoringService = monitoringService;
    initializeComponents();
    setupLayout();
  }

  private void initializeComponents() {
    // Heading with Logo and Name
    Image logo = new Image("images/sap_logo.jpg", "SAP Logo");
    logo.setHeight("2.7rem");
    H1 headingText = new H1("Purchase Order Agent");
    heading = new HorizontalLayout(logo, headingText);

    // Plant selector with predefined options
    commandInput = new TextField("Purchase Order Query");
    commandInput.setValue("Yield purchase order items for cities in Hessen");
    commandInput.setPlaceholder("Command prompt that is executed periodically.");
    commandInput.setWidthFull();
    commandInput.addValueChangeListener(
        event -> {
          submitButton.setEnabled(!Strings.isNullOrEmpty(event.getValue()));
        });

    // Submit button (initially disabled)
    submitButton = new Button("Execute Query");
    submitButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
    submitButton.setWidth("10rem");
    submitButton.addClickListener(
        event -> {
          String userPrompt = commandInput.getValue();
          if (userPrompt != null) {
            if (monitoringService.isActive()) {
              monitoringService.stopMonitoring();
              submitButton.setText("Execute Query");
              commandInput.setEnabled(true);
            } else {
              readings.clear();
              itemsGrid.getDataProvider().refreshAll();

              triggerLoadingScreen();
              monitoringService.startMonitoring(userPrompt);
              submitButton.setText("Stop Query");
              commandInput.setEnabled(false);
            }
          }
        });

    // Horizontal layout to include Input and Button
    userInput = new HorizontalLayout(commandInput, submitButton);
    userInput.setWidth("100%");
    userInput.setAlignItems(Alignment.END);
    userInput.setFlexGrow(1, commandInput);
    userInput.setFlexGrow(0, submitButton);

    // items grid (initially empty)
    itemsGrid = new Grid<>(PurchaseOrderItem.class, false);
    itemsGrid
        .addColumn(PurchaseOrderItem::getPurchaseOrder)
        .setHeader("Purchase Order")
        .setWidth("7rem");
    itemsGrid
        .addColumn(PurchaseOrderItem::getPurchaseOrderItem)
        .setHeader("Item-Nr.")
        .setWidth("10rem");
    itemsGrid
        .addColumn(PurchaseOrderItem::getPurchaseOrderItemText)
        .setHeader("Item")
        .setWidth("25rem");
    itemsGrid
        .addColumn(
            i -> {
              assert i.getOrderQuantity() != null;
              return i.getOrderQuantity().intValueExact();
            })
        .setHeader("Quantity")
        .setWidth("7rem");
    itemsGrid
        .addColumn(PurchaseOrderItem::getDeliveryAddressCityName)
        .setHeader("Delivery Address")
        .setWidth("15rem");
    itemsGrid
        .addColumn(new ComponentRenderer<>(Span::new, purchaseOrderDate))
        .setHeader("Date")
        .setWidth("10rem");
    itemsGrid
        .addColumn(new ComponentRenderer<>(item -> {
          String text = item.getPurchaseOrderItemNoteIfPresent()
              .map(
                  notes ->
                      notes.stream()
                          .map(PurchaseOrderItemNote::getPlainLongText)
                          .collect(joining(", ")))
              .getOrElse("");
          Span span = new Span(text);
          span.getElement().setProperty("title", text);
          span.getStyle()
              .set("white-space", "nowrap")
              .set("overflow", "hidden")
              .set("text-overflow", "ellipsis");
          return span;
        }))
        .setHeader("Note")
        .setWidth("25rem");
    itemsGrid
        .addComponentColumn(
            purchaseOrderItem -> {
              Button actionButton = new Button("Escalate");

              // Check if the item is overdue and disable button accordingly
              boolean isOverdue = purchaseOrderItem.getScheduleLineOrFetch().stream()
                  .findFirst()
                  .map(PurchaseOrderScheduleLine::getScheduleLineDeliveryDate)
                  .map(LocalDateTime::toLocalDate)
                  .map(date -> date.isBefore(LocalDate.now()))
                  .orElse(false);
              
              if (!isOverdue) {
                actionButton.setEnabled(false);
              }

              actionButton.addClickListener(
                  event -> {
                    actionButton.setEnabled(false);
                    actionButton.setText("...");
                    triggerEscalationScreen();
                    UI currentUI = UI.getCurrent();
                    CompletableFuture.supplyAsync(
                            () -> {
                              return monitoringService.invokeEscalation(purchaseOrderItem);
                            })
                        .thenAccept(
                            result -> {
                              currentUI.access(
                                  () -> {
                                    // Close escalation screen when escalation completes
                                    if (escalationScreen != null) {
                                      closeEscalationScreen();
                                    }
                                    actionButton.setText("Escalate");
                                    actionButton.setEnabled(true);
                                    purchaseOrderItem.setPurchaseOrderItemNote(
                                        List.of(
                                            PurchaseOrderItemNote.builder()
                                                .plainLongText(result)
                                                .build()));
                                    itemsGrid.getDataProvider().refreshAll();
                                  });
                            })
                        .exceptionally(
                            throwable -> {
                              currentUI.access(
                                  () -> {
                                    // Close escalation screen on error
                                    if (escalationScreen != null) {
                                      closeEscalationScreen();
                                    }

                                    actionButton.setText("Escalate");
                                    actionButton.setEnabled(true);
                                  });
                              return null;
                            });
                  });
              return actionButton;
            })
        .setHeader("Actions")
        .setFlexGrow(0);

    itemsGrid.setItems(readings);
    itemsGrid.setHeight("400px");
    itemsGrid
        .asSingleSelect()
        .addValueChangeListener(
            e -> {
              // editor.editItem(e.getValue());
            });

    // Empty state message
    emptyStateMessage = new Div();
    emptyStateMessage.setText("No Purchase Orders found, please type in a different filter query above and click 'Execute Query'.");
    emptyStateMessage.getStyle()
        .set("background", "#fff8e1")
        .set("border-left", "6px solid #ffca28")
        .set("border-radius", "8px")
        .set("padding", "20px 25px")
        .set("margin", "20px auto")
        .set("width", "60%")
        .set("color", "#795548")
        .set("font-size", "18px")
        .set("font-style", "italic")
        .set("box-shadow", "0 4px 12px rgba(255, 202, 40, 0.3)")
        .set("line-height", "1.5")
        .set("text-align", "center")
        .set("transition", "box-shadow 0.3s ease");
    emptyStateMessage.setVisible(false);
  }

  private void setupLayout() {
    add(heading);
    add(userInput);
    add(itemsGrid);
    add(emptyStateMessage);

    setAlignItems(Alignment.START);
    setPadding(true);
    setSpacing(true);
  }

  @Override
  protected void onAttach(AttachEvent attachEvent) {
    super.onAttach(attachEvent);
    monitoringService.addSubscriber(this);
  }

  @Override
  protected void onDetach(DetachEvent detachEvent) {
    super.onDetach(detachEvent);
    monitoringService.removeSubscriber(this);
  }

  public void addItem(PurchaseOrderItem purchaseOrderItem) {
    getUI()
        .ifPresent(
            ui ->
                ui.access(
                    () -> {
                      readings.add(purchaseOrderItem); // Add to list
                      itemsGrid.getDataProvider().refreshAll();
                      updateEmptyStateVisibility();
                      
                      // Close loading screen when first data arrives
                      if (!isFirstDataReceived && loadingScreen != null) {
                        isFirstDataReceived = true;
                        loadingScreen.close();
                      }
                      
                      ui.push(); // Explicitly push the update to the client
                    }));
  }

  public void onQueryCompleted() {
    getUI()
        .ifPresent(
            ui ->
                ui.access(
                    () -> {
                      // Close loading screen when query completes (even if no data found)
                      if (!isFirstDataReceived && loadingScreen != null) {
                        isFirstDataReceived = true;
                        loadingScreen.close();
                      }
                      
                      // Update empty state visibility when query completes
                      updateEmptyStateVisibility();
                      
                      ui.push(); // Explicitly push the update to the client
                    }));
  }

  public void promptOpen(
      String title,
      String message,
      String initialInput,
      AtomicReference<Optional<String>> callback) {
    getUI()
        .ifPresent(
            ui ->
                ui.access(
                    () -> {
                      modal =
                          new PromptModal(
                              title,
                              message,
                              initialInput,
                              (s, b) -> callback.set(b ? Optional.of(s) : Optional.empty()));
                      modal.open();
                      ui.push();
                    }));
  }

  public void promptClose() {
    getUI()
        .ifPresent(
            ui ->
                ui.access(
                    () -> {
                      if (modal != null) {
                        modal.close();
                      }
                    }));
  }

  public void showNotification(String s) {
    getUI()
        .ifPresent(
            ui ->
                ui.access(
                    () -> {
                      Notification notification =
                          Notification.show(s, 3000, Notification.Position.BOTTOM_CENTER);
                      notification.addThemeVariants(NotificationVariant.LUMO_CONTRAST);
                      ui.push();
                    }));
  }

  public void triggerLoadingScreen() {
    isFirstDataReceived = false; // Reset flag for new query
    loadingScreen = new LoadingScreen();
    loadingScreen.open();
    loadingScreen.startLoadingProcess();
  }

  public void triggerEscalationScreen() {
    escalationScreen = new LoadingScreen();
    escalationScreen.open();
    escalationScreen.startEscalationProcess();
  }

  public void closeEscalationScreen() {
      escalationScreen.close();
      escalationScreen = null;
  }

  private void updateEmptyStateVisibility() {
    // Switch the emptyStateMessage on or off
    boolean isEmpty = readings.isEmpty();
    emptyStateMessage.setVisible(isEmpty);
    itemsGrid.setVisible(!isEmpty);
  }
}
