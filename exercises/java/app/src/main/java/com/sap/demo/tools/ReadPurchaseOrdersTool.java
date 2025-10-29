package com.sap.demo.tools;

import com.sap.cloud.sdk.cloudplatform.connectivity.DefaultHttpDestination;
import com.sap.cloud.sdk.cloudplatform.connectivity.Destination;
import com.sap.demo.GetPurchaseOrdersTask;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.services.DefaultPurchaseOrderService;
import java.util.List;
import org.springframework.ai.tool.annotation.Tool;

/** Utility class for reading purchase orders. */
public record ReadPurchaseOrdersTool() {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(GetPurchaseOrdersTask.class);

  // URL of the OData service for accessing purchase orders
  static final String PURCHASE_ORDER_URL = "http://localhost:8080/sap/opu/odata/sap";

  /**
   * Reads the top 10 purchase order items from the OData service.
   *
   * @return A list of {@link PurchaseOrderItem} objects representing the purchase order items.
   * @throws RuntimeException if the request to the OData service fails.
   */
  @Tool(description = "Get all purchase orders and purchase order items.")
  public List<PurchaseOrderItem> getAllPurchaseOrders() {
    log.info("[TOOL START] Executing OData query for Purchase Order Items from SAP S/4 HANA.");
    long time = System.currentTimeMillis();

    Destination httpDestination = DefaultHttpDestination.builder(PURCHASE_ORDER_URL).build();

    List<PurchaseOrderItem> result = new DefaultPurchaseOrderService()
        .getAllPurchaseOrderItem()
        .select(
            PurchaseOrderItem.ALL_FIELDS,
            PurchaseOrderItem.TO_PURCHASE_ORDER_ITEM_NOTE,
            PurchaseOrderItem.TO_SCHEDULE_LINE)
        .top(100)
        .executeRequest(httpDestination);

    log.info("[TOOL END] Received {} Purchase Order Items within {}ms.", result.size(), System.currentTimeMillis()-time);
    return result;
  }
}
