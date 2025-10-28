package com.sap.demo.tools;

import com.sap.demo.Application.UiHandler;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

/** Tool to provide a discount on the purchase order. */
public record ProvideDiscountTool(UiHandler ui) {
  private static final org.slf4j.Logger log =
      org.slf4j.LoggerFactory.getLogger(ProvideDiscountTool.class);

  /**
   * Request class
   *
   * @param percentageAmount The discount percentage to provide
   */
  public record Request(Integer percentageAmount) {}

  /** Tool to provide a discount on the purchase order. */
  @Tool(description = "Provide a discount on the purchase order to satisfy the customer and close the escalation.")
  public void discountPurchase(@ToolParam Request request) {
    log.info("Discount provided successfully: Percentage%s%n".formatted(request.percentageAmount()));

    ui.notify("Discount of %d%% provided".formatted(request.percentageAmount()));
  }
}
