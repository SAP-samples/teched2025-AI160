package com.sap.demo;

import com.sap.ai.sdk.orchestration.OrchestrationModuleConfig;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatModel;
import com.sap.ai.sdk.orchestration.spring.OrchestrationChatOptions;
/* Exercise 3 imports
import com.sap.ai.sdk.orchestration.DpiMasking;
import com.sap.ai.sdk.orchestration.AzureContentFilter;
import static com.sap.ai.sdk.orchestration.AzureFilterThreshold.*;
 */
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
// Comment out in Exercise 3
import static com.sap.ai.sdk.orchestration.OrchestrationAiModel.CLAUDE_4_SONNET;
// Uncomment in Exercise 3
//import static com.sap.ai.sdk.orchestration.OrchestrationAiModel.GPT_41;

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
    /*
    // Comment out for Exercise 3
    OrchestrationModuleConfig conf = new OrchestrationModuleConfig().withLlmConfig(CLAUDE_4_SONNET);
    // Uncomment for Exercise 3
    // OrchestrationModuleConfig conf = new OrchestrationModuleConfig().withLlmConfig(GPT_41);
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
    */
    // YOUR CODE END

    /* ---------------------------------------- EXERCISE 3 (Solution) ----------------------------------------
     Change model to GPT-4.1, enable masking (email redaction), and apply prompt shielding.
     Place this block directly below the Exercise 1 `conf` and `options` lines.
     Uncomment this block and comment out the Exercise 1 `conf` and `options` lines to enable Exercise 3.

     OrchestrationModuleConfig conf = new OrchestrationModuleConfig()
         .withLlmConfig(GPT_41);

     // Email redaction (masking)
     var emailRegex = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";
     var maskingConfig = DpiMasking.anonymization()
         .withRegex(emailRegex, "EMAIL ADDRESS REMOVED");

     // Strict prompt shielding
     var filterStrict = new AzureContentFilter()
         .promptShield(true)
         .hate(ALLOW_SAFE)
         .selfHarm(ALLOW_SAFE)
         .sexual(ALLOW_SAFE)
         .violence(ALLOW_SAFE);

     // Final EX3 config
     OrchestrationModuleConfig finalConf = conf
         .withMaskingConfig(maskingConfig)
         .withInputFiltering(filterStrict);

     // Options built from EX3 config
     OrchestrationChatOptions options = new OrchestrationChatOptions(finalConf);
     ---------------------------------------- EXERCISE 3 (Solution) ---------------------------------------- */
    // delete the following line
     List<PurchaseOrderItem> result = new ReadPurchaseOrdersTool().getAllPurchaseOrders();

    /* ---------------------------------------- EXERCISE 3 (Solution) ----------------------------------------
     Add minimal error handling to surface prompt shielding errors and avoid spinner hang.
     Place this block directly below the default call block.
     Uncomment this block and comment out the default call to enable Exercise 3 error handling.

     List<PurchaseOrderItem> result;
     try {
         result = chatClient
             .prompt(userPrompt)
             .system(SYSTEM_MESSAGE)
             .options(options)
             .tools(tool)
             .call()
             .entity(new org.springframework.core.ParameterizedTypeReference<List<PurchaseOrderItem>>() {});
     } catch (com.sap.ai.sdk.orchestration.OrchestrationFilterException e) {
         log.warn("Prompt shielding blocked input: {}", e.getMessage(), e);
         ui.notify("Prompt shielding blocked the input. Please modify your prompt or thresholds.");
         return List.of();
     } catch (RuntimeException e) {
         log.error("Unexpected error during orchestration: {}", e.getMessage(), e);
         ui.notify("An error occurred while processing your request.");
         return List.of();
     }
     ---------------------------------------- EXERCISE 3 (Solution) ---------------------------------------- */
    // ---------------------------------------- EXERCISE 1 ----------------------------------------

    writeNotification(result, ui);
    return result;
  }

  private void writeNotification(List<PurchaseOrderItem> result, UiHandler ui) {
    int n = result==null ? 0 : result.size();
    String message = "Found %d Purchase Order items for the given LLM prompt.".formatted(n);
    ui.notify(message);
    log.info(message);
  }
}
