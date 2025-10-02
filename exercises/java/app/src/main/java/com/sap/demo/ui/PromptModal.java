package com.sap.demo.ui;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;

public class PromptModal extends Dialog {

  private final TextArea inputField;
  private final Button confirmButton;
  private final Button cancelButton;
  private final PromptCallback callback;

  public interface PromptCallback {
    void onResult(String input, boolean confirmed);
  }

  public PromptModal(
      String promptTitle, String promptMessage, String initialInput, PromptCallback callback) {
    this.callback = callback;

    setCloseOnEsc(true);
    setCloseOnOutsideClick(false);
    setModal(true);
    setDraggable(true);
    setResizable(false);

    // Header
    H3 header = new H3(promptTitle);
    header.getStyle().set("margin", "0 0 1em 0");

    // Prompt message
    Paragraph message = new Paragraph(promptMessage);
    message.getStyle().set("margin-bottom", "1em");

    // Input field
    inputField = new TextArea();
    inputField.setValue(initialInput);
    inputField.setWidthFull();
    inputField.focus();

    // Buttons
    confirmButton = new Button("OK", e -> handleConfirm());
    confirmButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
    confirmButton.addClickShortcut(Key.ENTER);

    cancelButton = new Button("Cancel", e -> handleCancel());
    cancelButton.addClickShortcut(Key.ESCAPE);

    // Button layout
    HorizontalLayout buttonLayout = new HorizontalLayout(confirmButton, cancelButton);
    buttonLayout.setJustifyContentMode(FlexComponent.JustifyContentMode.END);
    buttonLayout.getStyle().set("margin-top", "1em");

    // Main layout
    VerticalLayout layout = new VerticalLayout(header, message, inputField, buttonLayout);
    layout.setPadding(true);
    layout.setSpacing(false);
    layout.setAlignItems(FlexComponent.Alignment.STRETCH);
    layout.setWidth("400px");

    add(layout);

    // Handle Enter key in text field
    inputField.addKeyPressListener(Key.ENTER, e -> handleConfirm());
  }

  private void handleConfirm() {
    String input = inputField.getValue();
    close();
    if (callback != null) {
      callback.onResult(input, true);
    }
  }

  private void handleCancel() {
    close();
    if (callback != null) {
      callback.onResult(null, false);
    }
  }

  @Override
  public void open() {
    super.open();
    inputField.focus();
  }
}
