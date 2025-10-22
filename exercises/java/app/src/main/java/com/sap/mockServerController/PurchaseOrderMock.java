package com.sap.mockServerController;

import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static java.util.function.UnaryOperator.identity;
import static java.util.stream.Collectors.toMap;

/**
 * Internal helper class to register a static destination "mock" to localhost:8080 serving sample
 * OData payload.
 */
@RestController
@RequestMapping("sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/")
@Slf4j
public class PurchaseOrderMock {

  @Autowired
  private DataGenerator dataGenerator;

  private Map<Id, PurchaseOrderItem> items;

  @PostConstruct
  private void initializeItems() {
    List<PurchaseOrderItem> list = dataGenerator.generatePurchaseOrderItems();
    items = list.stream().collect(toMap(Id::fromPurchaseOrderItem, identity()));
  }

  @GetMapping("/A_PurchaseOrderItemNote")
  public Object getAllPurchaseOrderItemNotes(
      @RequestParam(value = "$top", required = false, defaultValue = "0") int top) {
    List<PurchaseOrderItemNote> notes = items.values().stream().flatMap(item -> item.getPurchaseOrderItemNoteOrFetch().stream()).toList();
    return envelope(notes, top);
  }

  @PostMapping("/A_PurchaseOrderItemNote")
  public Object postPurchaseOrderItemNote(@RequestBody PurchaseOrderItemNote note) {
    Id id = new Id(note.getPurchaseOrder(), note.getPurchaseOrderItem());
    PurchaseOrderItem item = items.computeIfAbsent(id, Id::toPurchaseOrderItem);
    item.addPurchaseOrderItemNote(note);
    return note;
  }

  @GetMapping("/A_PurchaseOrderItem")
  public Object getAllPurchaseOrderItems(
      @RequestParam(value = "$top", required = false, defaultValue = "0") int top) {
    return envelope(items.values(), top);
  }

  /** Minimal OData envelope: { "d": { "results": [...] } } */
  private static Object envelope(Collection<?> results, int limit) {
    if (limit > 0 && limit < results.size()) {
      results = results.stream().limit(limit).toList();
    }
    return Collections.singletonMap("d", Collections.singletonMap("results", results));
  }

  record Id(String purchaseOrder, String purchaseOrderItem) {
    static Id fromPurchaseOrderItem(PurchaseOrderItem item) {
      return new Id(item.getPurchaseOrder(), item.getPurchaseOrderItem());
    }
    public PurchaseOrderItem toPurchaseOrderItem() {
      return PurchaseOrderItem.builder().purchaseOrder(purchaseOrder).purchaseOrderItem(purchaseOrderItem).build();
    }
  }
}
