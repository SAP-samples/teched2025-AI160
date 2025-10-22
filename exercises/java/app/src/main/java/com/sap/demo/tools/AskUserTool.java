package com.sap.demo.tools;

import com.sap.demo.Application.UiHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;

/** Tool to ask the user a briefQuestion through the UI. */
@RequiredArgsConstructor
public class AskUserTool {

  private final UiHandler ui;

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
    return ui
        .promptUser(
            askUserRequest.purpose(),
            askUserRequest.briefQuestion(),
            askUserRequest.expectedAnswer())
        .orElse("No answer received");
  }
}
