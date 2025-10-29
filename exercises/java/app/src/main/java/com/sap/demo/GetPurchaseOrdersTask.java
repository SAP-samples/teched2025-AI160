package com.sap.demo;

import com.sap.ai.sdk.orchestration.OrchestrationModuleConfig;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatModel;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatOptions;
import com.sap.demo.tools.MailTool;
import com.sap.demo.tools.ReadPurchaseOrdersTool;
import com.sap.demo.Application.UiHandler;
import com.sap.generated.namespaces.purchaseorder.PurchaseOrderItem;

import java.util.Arrays;
import java.util.List;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;

import static com.sap.ai.sdk.orchestration.OrchestrationAiModel.CLAUDE_4_SONNET;

@Component
public class GetPurchaseOrdersTask {
  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(GetPurchaseOrdersTask.class);

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
  public List<PurchaseOrderItem> getPurchaseOrderItems(String userQuery, UiHandler ui) {
    log.info("Getting Purchase Order items for user query: {}", userQuery);

    // ---------------------------------------- EXERCISE 1 ----------------------------------------
    // YOUR CODE START
    OrchestrationModuleConfig conf = new OrchestrationModuleConfig().withLlmConfig(CLAUDE_4_SONNET);
    OrchestrationChatOptions options = new OrchestrationChatOptions(conf);
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
    writeNotification(result, ui);
    return result;
  }

  private void writeNotification(List<PurchaseOrderItem> result, UiHandler ui) {
    int n = result==null ? 0 : result.size();
    String message = "Found %s Purchase Order items for the given LLM prompt.".formatted(n);
    ui.notify(message);
    log.info(message);
  }
}
