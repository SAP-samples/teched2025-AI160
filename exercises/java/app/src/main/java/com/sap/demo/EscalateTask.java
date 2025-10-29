package com.sap.demo;

import com.sap.ai.sdk.orchestration.OrchestrationAiModel;
import com.sap.ai.sdk.orchestration.OrchestrationModuleConfig;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatModel;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatOptions;
import com.sap.demo.tools.AskUserTool;
import com.sap.demo.tools.DateTimeTool;
import com.sap.demo.tools.MailTool;
import com.sap.demo.tools.SaveCommentTool;
import com.sap.demo.Application.UiHandler;
import com.sap.demo.ui.PurchaseOrderMonitoringService.EscalationOutcome;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import org.springframework.ai.chat.client.ChatClient;

public class EscalateTask {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(EscalateTask.class);

  private static final String SYSTEM_MESSAGE =
      """
    # PURCHASE ORDER AGENT
    You are handling escalations for Purchase Orders we are waiting for that are delayed.
    In an escalation, we want to ask our partners why they are delayed and when we can expect them to arrive.
    The goal is to find a solution that will satisfy the user and close the escalation.

    ## KEY BEHAVIORS

    - Use the provided tools. There should be a tool for all specified actions asked from you that go beyond basic reasoning. If there are multiple tools that can close the escalation, ask the user which one to use.
    - Do not hallucinate business data. Do not make up any business data, like Purchase Order items.
    - For communication, always include specific Purchase Order numbers, delivery dates, and vendor details.
    - Check schedule line delivery dates against current time for overdue analysis. We want to know which items we bought should have been delivered to us but are still overdue.
      - When escalating, we aks the company sending the items to us why they are not here. We also tell them why we need the items. The more specific you can formulate that need the better. 
    - Base decisions on actual Purchase Order data, not assumptions.
    - Before calling a tool that satisfies the customer and closes the escalation, always ask the user which one they would use by presenting the different options.
    - Document every outcome of escalation solution by saving a comment.
    - Before using the mailTool, always ask the user via the askUserTool whether you should draft an e-mail. Stick as close as possible to what the user answers.
    """;

  public EscalationOutcome resolveEscalation(PurchaseOrderItem item, UiHandler ui) {
    log.info("Resolving escalation for PurchaseOrderItem: {}", item.getPurchaseOrderItemText());

    // ---------------------------------------- EXERCISE 2 ----------------------------------------
    OrchestrationModuleConfig config =
        new OrchestrationModuleConfig().withLlmConfig(OrchestrationAiModel.CLAUDE_4_SONNET);

    OrchestrationChatOptions options = new OrchestrationChatOptions(config);

    ChatClient chatClient = ChatClient.create(new OrchestrationChatModel());
    // --------------------------------------------------------------------------------------------
    // YOUR CODE START
    String userQuery =
        "Please escalate for the following purchaseOrderItem %s, send email and save a note"
            .formatted(item.toString());

    AskUserTool askUserTool = new AskUserTool(ui);
    MailTool mailTool = new MailTool(ui);
    SaveCommentTool saveCommentTool = new SaveCommentTool(ui);
    DateTimeTool dateTimeTool = new DateTimeTool();

    EscalationOutcome result =
        chatClient
            .prompt()
            .system(SYSTEM_MESSAGE)
            .user(userQuery)
            .options(options)
            .tools(askUserTool, mailTool, saveCommentTool, dateTimeTool)
            .call()
            .entity(EscalationOutcome.class);
    // ---------------------------------------- EXERCISE 2 ----------------------------------------

    log.info("Escalation finished with: {}", result);
    return result;
  }
}
