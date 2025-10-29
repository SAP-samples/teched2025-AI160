package com.sap.demo.tools;

import com.sap.demo.Application.UiHandler;
import com.sap.demo.GetPurchaseOrdersTask;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

import java.util.Optional;


/** Tool to ask the user a briefQuestion through the UI. */
public record AskUserTool( UiHandler ui) {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(AskUserTool.class);

  /**
   * Request class for the AskUserTool
   *
   * @param purpose The purpose of the prompt dialog
   * @param briefQuestion The brief question to ask the user
   * @param expectedAnswer The expected answer pre-filled for the user
   */
  public record Request(String purpose, String briefQuestion, String expectedAnswer) {}

  /**
   * Ask the user a brief question through the UI prompt system. This calls the monitoring service's
   * promptUser method to trigger the UI.
   */
  @Tool(
      description =
          "Only way to interact with the user. Ask a brief question, provide an expected answer. The purpose is the title and should start with a verb.")
  public String askUser(@ToolParam final Request askUserRequest) {
    log.info("[TOOL START] Asking user a question regarding \"{}\".",
        askUserRequest.purpose());
    long time = System.currentTimeMillis();

    Optional<String> result = ui
        .promptUser(
            askUserRequest.purpose(),
            askUserRequest.briefQuestion(),
            askUserRequest.expectedAnswer());

    log.info("[TOOL END] User {} answered after {}ms.",
        result.isPresent() ? "did" : "didn't",
        System.currentTimeMillis() - time);
    return result.orElse("No answer received");
  }
}
