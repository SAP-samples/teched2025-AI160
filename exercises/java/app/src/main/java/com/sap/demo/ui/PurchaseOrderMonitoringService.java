package com.sap.demo.ui;

import com.sap.demo.EscalateTask;
import com.sap.demo.GetPurchaseOrdersTask;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class PurchaseOrderMonitoringService {

  private final GetPurchaseOrdersTask purchaseOrderTool;

  private final AtomicBoolean readPurchaseOrders = new AtomicBoolean(false);
  private String prompt = "";
  private final List<PurchaseOrdersView> subscribers = new ArrayList<>();

  public void addSubscriber(PurchaseOrdersView subscriber) {
    subscribers.add(subscriber);
  }

  public void removeSubscriber(PurchaseOrdersView subscriber) {
    subscribers.remove(subscriber);
  }

  public void startMonitoring(String prompt) {
    this.prompt = prompt;
    this.readPurchaseOrders.set(true);
  }

  public void stopMonitoring() {
    this.readPurchaseOrders.set(false);
  }

  public boolean isActive() {
    return readPurchaseOrders.get();
  }

  @Scheduled(fixedDelay = 1000) // 1-second delay between executions
  public void monitorPlant() {
    if (!readPurchaseOrders.get()) {
      return;
    }

    List<PurchaseOrderItem> items = purchaseOrderTool.getPurchaseOrderItems(prompt, this);
    log.trace("Got {} purchase order items, sending to {} subscribers", items.size(), subscribers.size());

    for (PurchaseOrdersView subscriber : new ArrayList<>(subscribers)) {
      try {
        if (items.isEmpty()) {
          // If no data found, close loading screen
          subscriber.onQueryCompleted();
        } else {
          for (PurchaseOrderItem item : items) {
            subscriber.addItem(item);
          }
        }
      } catch (Exception e) {
        subscribers.remove(subscriber);
      }
    }
  }

  public record EscalationOutcome(Boolean isEmailSent, Boolean isNoteSaved, String escalationComment) {}
  @Async
  public String invokeEscalation(PurchaseOrderItem selectedPurchaseOrderItem) {
    EscalateTask escalationProvider = new EscalateTask();
    return escalationProvider.resolveEscalation(selectedPurchaseOrderItem,this).escalationComment();
  }

  @Async
  public Optional<String> promptUser(String title, String message, String initialInput) {
    List<Callable<Optional<String>>> tasks = new ArrayList<>();
    ExecutorService executor = Executors.newFixedThreadPool(subscribers.size());
    for (PurchaseOrdersView subscriber : new ArrayList<>(subscribers)) {
      AtomicReference<Optional<String>> ref = new AtomicReference<>();
      subscriber.promptOpen(title, message, initialInput, ref);

      tasks.add(
          () -> {
            for (int i = 0; ref.get() == null && i < 1000; i++) {
              Thread.sleep(100);
            }
            return ref.get();
          });
    }
    try {
      Optional<String> result = executor.invokeAny(tasks);
      for (PurchaseOrdersView subscriber : new ArrayList<>(subscribers)) {
        subscriber.promptClose();
      }
      return result;
    } catch (Exception e) {
      throw new RuntimeException(e);
    } finally {
      executor.shutdownNow();
    }
  }

  public void notifySubscribers(String s) {
    for (PurchaseOrdersView subscriber : new ArrayList<>(subscribers)) {
      try {
        subscriber.showNotification(s);
      } catch (Exception e) {
        subscribers.remove(subscriber);
      }
    }
  }
}
