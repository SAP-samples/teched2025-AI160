package com.sap.demo;

import com.sap.ai.sdk.orchestration.OrchestrationAiModel;
import com.sap.ai.sdk.orchestration.OrchestrationModuleConfig;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatModel;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatOptions;
import com.sap.demo.tools.ReadPurchaseOrdersTool;
import com.sap.demo.tools.SaveCommentTool;
import com.sap.demo.ui.PurchaseOrderMonitoringService;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.ChatClient.ChatClientRequestSpec;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class GetPurchaseOrdersTask {
  private static final String SYSTEM_MESSAGE =
      """
    # PURCHASE ORDER AGENT
    You are monitoring Purchase Order items which you are capable to fetch and read using the available tool.
    You are providing information about Purchase Orders items to the user.
    The goal is to find a solution that will satisfy the user as well as their customer and close the escalation.

    ## KEY BEHAVIORS

    - Do not hallucinate business data. Do not make up any business data, stick to the data you can fetch through the tool.
    - When asked for Purchase Order items, only refer to the provided data or use the available tools to resolve Purchase Order items.
    - The user prompt may contain phrases to filter to reduce the result set, try to figure out what the user wants based on the available data.
    - For communication, always include specific Purchase Order numbers, delivery dates, and vendor details.
    """;

  @Cacheable("purchaseOrders")
  public List<PurchaseOrderItem> getPurchaseOrderItems(
      String userQuery, PurchaseOrderMonitoringService monitoringService) {
    // ---------------------------------------- EXERCISE 1 ----------------------------------------
    // YOUR CODE START
    /*
    OrchestrationModuleConfig config =
        new OrchestrationModuleConfig().withLlmConfig(OrchestrationAiModel.CLAUDE_4_SONNET);
    OrchestrationChatOptions options = new OrchestrationChatOptions(config);
    ChatClient chatClient = ChatClient.create(new OrchestrationChatModel());

    UserMessage userMessage = new UserMessage(userQuery);
    Prompt userPrompt = new Prompt(userMessage);

    ReadPurchaseOrdersTool tool = new ReadPurchaseOrdersTool();

    List<PurchaseOrderItem> result =
        chatClient
            .prompt(userPrompt)
            .system(SYSTEM_MESSAGE)
            .options(options)
            .tools(tool)
            .call()
            .entity(new ParameterizedTypeReference<>() {});
    */
    // YOUR CODE END
    // delete the following line
     List<PurchaseOrderItem> result = new ReadPurchaseOrdersTool().getAllPurchaseOrders();
    // ---------------------------------------- EXERCISE 1 ----------------------------------------

    writeNotification(result, monitoringService);
    return result;
  }

  private void writeNotification(
      List<PurchaseOrderItem> result, PurchaseOrderMonitoringService monitoringService) {
    String message =
        "Found %d Purchase Order items for the given LLM prompt.".formatted(result.size());
    monitoringService.notifySubscribers(message);
  }
}
