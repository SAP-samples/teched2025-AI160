package com.sap.demo.tools;

import com.sap.demo.Application.UiHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

/** Tool to provide a discount on the purchase order. */
@RequiredArgsConstructor
@Slf4j
public class ProvideDiscountTool {

  private final UiHandler ui;

  /**
   * Request class
   *
   * @param percentageAmount The discount percentage to provide
   */
  public record Request(Integer percentageAmount) {}

  /** Tool to provide a discount on the purchase order. */
  @Tool(description = "Provide a discount on the purchase order to satisfy the customer and close the escalation.")
  public void discountPurchase(@ToolParam Request request) {
    log.debug("Discount provided successfully: Percentage{}%n", request.percentageAmount());

    ui.notify("Discount of %d%% provided".formatted(request.percentageAmount()));
  }
}
