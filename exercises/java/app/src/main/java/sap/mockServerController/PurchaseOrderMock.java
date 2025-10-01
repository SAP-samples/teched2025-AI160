package com.sap.mockServerController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;
import java.util.Collections;
import java.util.List;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Internal helper class to register a static destination "mock" to localhost:8080 serving sample
 * OData payload.
 */
@RestController
@RequestMapping("sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/")
@Slf4j
public class PurchaseOrderMock {

  private final ObjectMapper JACKSON = new ObjectMapper();
  @Autowired private DBService db;

  @GetMapping("/A_PurchaseOrderItemNote")
  public Object getAllPurchaseOrderItemNotes(
      @RequestParam(value = "$top", required = false, defaultValue = "0") int top) {
    return envelope(db.getAllPOINs(), top);
  }

  @PostMapping("/A_PurchaseOrderItemNote")
  public Object postPurchaseOrderItemNote(@RequestBody PurchaseOrderItemNote newItemNote) {
    db.addPOIN(newItemNote);
    return newItemNote;
  }

  @GetMapping("/A_PurchaseOrderItem")
  public Object getAllPurchaseOrderItems(
      @RequestParam(value = "$top", required = false, defaultValue = "0") int top) {
    return envelope(db.getAllPOIs(), top);
  }

  /** Minimal OData envelope: { "d": { "results": [...] } } */
  private static Object envelope(List<?> results, int limit) {
    if (limit > 0 && limit < results.size()) {
      results = results.subList(0, limit);
    }
    return Collections.singletonMap("d", Collections.singletonMap("results", results));
  }
}
