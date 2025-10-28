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
    DefaultHttpDestination dest = DefaultHttpDestination.builder(PURCHASE_ORDER_URL).build();
    DefaultPurchaseOrderService service = new DefaultPurchaseOrderService();
    var pOINote =
        PurchaseOrderItemNote.builder()
            .purchaseOrder(request.purchaseOrderItem.getPurchaseOrder())
            .purchaseOrderItem(request.purchaseOrderItem.getPurchaseOrderItem())
            .plainLongText(request.comment)
            .build();
    service.createPurchaseOrderItemNote(pOINote).executeRequest(dest);

    log.info(
        "Note saved successfully: Item[%s - %s], Note%s%n".formatted(
        request.purchaseOrderItem().getPurchaseOrder(),
        request.purchaseOrderItem().getPurchaseOrderItem(),
        request.comment()));

    ui.notify("Purchase Order Item updated.");
  }
}
