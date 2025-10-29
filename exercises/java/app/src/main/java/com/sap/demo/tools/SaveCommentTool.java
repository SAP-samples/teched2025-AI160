package com.sap.demo.tools;

import com.sap.cloud.sdk.cloudplatform.connectivity.DefaultHttpDestination;
import com.sap.demo.Application.UiHandler;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItemNote;
import com.sap.generated.services.DefaultPurchaseOrderService;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

/** Tool to save a PurchaseOrderItemNote. */
public record SaveCommentTool(UiHandler ui) {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(SaveCommentTool.class);

  static final String PURCHASE_ORDER_URL = "http://localhost:8080/sap/opu/odata/sap";

  /**
   * Request class for the SaveNoteTool
   *
   * @param purchaseOrderItem The PurchaseOrderItem for which the comment is created
   * @param comment The text of the comment to create.
   */
  public record Request(PurchaseOrderItem purchaseOrderItem, String comment) {}

  /** Tool to save a PurchaseOrderItemNote. */
  @Tool(description = "Write a short comment about the outcome of escalation incident, don't include purchase order item details.")
  public void saveComment(@ToolParam Request request) {
    String order = request.purchaseOrderItem().getPurchaseOrder();
    String item = request.purchaseOrderItem().getPurchaseOrderItem();

    log.info("[TOOL START] Saving note for {} - {}", order,
        item);
    long time = System.currentTimeMillis();

    DefaultHttpDestination dest = DefaultHttpDestination.builder(PURCHASE_ORDER_URL).build();
    DefaultPurchaseOrderService service = new DefaultPurchaseOrderService();
    var pOINote =
        PurchaseOrderItemNote.builder()
            .purchaseOrder(order)
            .purchaseOrderItem(item)
            .plainLongText(request.comment)
            .build();
    service.createPurchaseOrderItemNote(pOINote).executeRequest(dest);

    log.info(
        "[TOOL END] Note saved successfully after {}ms: Item[{} - {}], Note: {}",
        System.currentTimeMillis()-time,
        order,
        item,
        request.comment());

    ui.notify("Purchase Order Item updated.");
  }
}
