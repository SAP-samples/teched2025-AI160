package com.sap.mockServerController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@DependsOn("dataGenerator")
class DBService {
  private Map<ID, PurchaseOrderItem> purchaseOrderItems;
  private final ObjectMapper JACKSON = new ObjectMapper();

  @PostConstruct
  private void initializeDB() throws IOException {
    purchaseOrderItems = new HashMap<>();
    List<PurchaseOrderItem> list =
        JACKSON.readValue(
            new File("exercises/java/app/src/main/resources/PurchaseOrderItem_example.json"),
            new TypeReference<>() {});
    for (PurchaseOrderItem item : list) {
      ID id = new ID(item.getPurchaseOrder(), item.getPurchaseOrderItem());
      purchaseOrderItems.put(id, item);
    }
  }

  /** Returns all PurchaseOrderItems in the DB. */
  List<PurchaseOrderItem> getAllPOIs() {
    return purchaseOrderItems.values().stream().toList();
  }

  /** Returns all PurchaseOrderItemNotes in the DB. */
  List<PurchaseOrderItemNote> getAllPOINs() {
    List<PurchaseOrderItemNote> list = new ArrayList<>();
    for (PurchaseOrderItem item : getAllPOIs()) {
      list.addAll(item.getPurchaseOrderItemNoteOrFetch());
    }
    return list;
  }

  /** Returns all PurchaseOrderItemNotes of a specified PurchaseOrderItem. */
  List<PurchaseOrderItemNote> getPOINOfPOI(PurchaseOrderItem item) {
    ID id = new ID(item.getPurchaseOrder(), item.getPurchaseOrderItem());
    if (!purchaseOrderItems.containsKey(id)) {
      return List.of();
    }
    return purchaseOrderItems.get(id).getPurchaseOrderItemNoteOrFetch();
  }

  /**
   * Adds a PurchaseOrderItemNote to the DB. If the corresponding PurchaseOrderItem does not exist,
   * it is created.
   */
  void addPOIN(PurchaseOrderItemNote note) {
    ID id = new ID(note.getPurchaseOrder(), note.getPurchaseOrderItem());
    PurchaseOrderItem item = getOrCreateItem(id);
    List<PurchaseOrderItemNote> allNotes = getPOINOfPOI(item);
    allNotes.add(note);
    purchaseOrderItems.get(id).addPurchaseOrderItemNote();
  }

  private PurchaseOrderItem getOrCreateItem(ID id) {
    if (purchaseOrderItems.containsKey(id)) {
      return purchaseOrderItems.get(id);
    }
    PurchaseOrderItem newItem =
        PurchaseOrderItem.builder()
            .purchaseOrder(id.purchaseOrder)
            .purchaseOrderItem(id.purchaseOrderItem)
            .build();
    purchaseOrderItems.put(id, newItem);
    return newItem;
  }

  record ID(String purchaseOrder, String purchaseOrderItem) {}
}
