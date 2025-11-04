# Exercise 3 - Orchestration Features: Masking and Prompt Shielding

In this exercise, you will enable PII masking and prompt shielding and observe their impact on the agent’s behavior.
You will use the [SAP Cloud SDK for AI (Java)](https://github.com/SAP/ai-sdk-java) and [Spring AI](https://spring.io/projects/spring-ai).

## Overview

In this task we will:

- Mask email addresses so that generated content shows a fixed placeholder.
- Enable prompt shielding on input and observe strict versus loose behavior.

This exercise focuses on visible outcomes in the UI:

- The escalation email shows a redacted address (e.g., “EMAIL ADDRESS REMOVED”).
- When the input is blocked by prompt shielding, the UI surfaces an error and the operation completes.

## Prerequisites

1. Complete [Exercise 1](../ex1/README.md) and [Exercise 2](../ex2/README.md).
2. Ensure the orchestration dependency is available: `com.sap.ai.sdk:orchestration:1.13.0`.
3. Configure AI Core credentials in `app/.env`.

## What you’ll implement

1. Mask email addresses before sending content to the model and keep the replacement string in the output
2. Enable prompt shielding on input and demonstrate both:
   - A “strict” configuration that can intentionally block the prompt (400 Bad Request)
   - A “loose” configuration that allows the prompt to pass for comparison

## Files to update

- `app/src/main/java/com/sap/demo/GetPurchaseOrdersTask.java`
- `app/src/main/java/com/sap/demo/EscalateTask.java`

---

## Step 1: Masking — Email Redaction (Uncomment/Comment Instructions)

You will switch from the default Exercise 2 code to the Exercise 3 solution by uncommenting the labeled blocks and commenting the prior lines.

1. In `GetPurchaseOrdersTask.java`:

- Locate the commented block:
  ```
  /* ---------------------------------------- EXERCISE 3 (Solution) ----------------------------------------
  Change model to GPT-4.1, enable masking (email redaction), and apply prompt shielding.
  ...
  OrchestrationChatOptions options = new OrchestrationChatOptions(finalConf);
  ---------------------------------------- EXERCISE 3 (Solution) ---------------------------------------- */
  ```
- Uncomment this entire block.
- Comment out the default line just below it:
  ```java
  // OrchestrationChatOptions options = new OrchestrationChatOptions(conf);
  ```
- Ensure the following are present before the EX3 call: `ChatClient`, `UserMessage`, `Prompt`, and `ReadPurchaseOrdersTool` instances.

2. In `EscalateTask.java`:

- Locate the commented block:
  ```
  /* ---------------------------------------- EXERCISE 3 (Solution) ----------------------------------------
  Change model to GPT-4.1, apply email redaction masking, and enable prompt shielding.
  ...
  OrchestrationChatOptions options = new OrchestrationChatOptions(finalConf);
  ---------------------------------------- EXERCISE 3 (Solution) ---------------------------------------- */
  ```
- Uncomment this entire block.
- Comment out the default line just below it:
  ```java
  // OrchestrationChatOptions options = new OrchestrationChatOptions(config);
  ```
- If present, also comment out the dummy result line:
  ```java
  // EscalationOutcome result = new EscalationOutcome(true, true, "Done");
  ```

Expected effect:

- Any email-like string is replaced with “EMAIL ADDRESS REMOVED” in the model’s output (e.g., escalation email).

> [!TIP]
> Imports required when enabling EX3:
>
> - For masking and filters: `import com.sap.ai.sdk.orchestration.DpiMasking;`
> - For prompt shielding: `import com.sap.ai.sdk.orchestration.AzureContentFilter;`
> - For thresholds: `import static com.sap.ai.sdk.orchestration.AzureFilterThreshold.*;`

---

## Step 2: Prompt Shielding — Input Filtering (Optional)

If you want to demonstrate strict versus loose configurations, apply the filter to the same `finalConf` used in Exercise 3:

Strict (may reject input):

```java
import static com.sap.ai.sdk.orchestration.AzureFilterThreshold.*;
import com.sap.ai.sdk.orchestration.AzureContentFilter;

var filterStrict = new AzureContentFilter()
    .hate(ALLOW_SAFE)
    .selfHarm(ALLOW_SAFE)
    .sexual(ALLOW_SAFE)
    .violence(ALLOW_SAFE)
    .promptShield(true);

finalConf = finalConf.withInputFiltering(filterStrict); // reuse finalConf from masking
```

Loose (more permissive, for comparison):

```java
var filterLoose = new AzureContentFilter()
    .hate(ALLOW_SAFE_LOW_MEDIUM)
    .selfHarm(ALLOW_SAFE_LOW_MEDIUM)
    .sexual(ALLOW_SAFE_LOW_MEDIUM)
    .violence(ALLOW_SAFE_LOW_MEDIUM)
    .promptShield(true);

// finalConf = finalConf.withInputFiltering(filterLoose);
```

Expected effect:

- Strict input filtering may produce a 400 “Prompt attack detected.” This is by design, to demonstrate safeguarding.
- Loose filtering typically allows the prompt to pass.

---

## Step 3: UI Feedback (minimal change) — Uncomment/Comment Instructions

In `GetPurchaseOrdersTask.java`, you will switch the call handling to the commented Exercise 3 solution block:

- Locate the commented block:
  ```
  /* ---------------------------------------- EXERCISE 3 (Solution) ----------------------------------------
  Add minimal error handling to surface prompt shielding errors and avoid spinner hang.
  ...
  ---------------------------------------- EXERCISE 3 (Solution) ---------------------------------------- */
  ```
- Uncomment this block (the `try/catch` variant).
- Comment out the default call just below:
  ```java
  // List<PurchaseOrderItem> result = chatClient
  //   .prompt(userPrompt)...
  //   .entity(new ParameterizedTypeReference<List<PurchaseOrderItem>>() {});
  ```

This avoids a perpetual “Processing Result” state and surfaces a clear error message.

---

## Step 4: Test the Complete Workflow

1. Move from Exercise 2 to Exercise 3:

   - In `GetPurchaseOrdersTask.java`, uncomment the “EXERCISE 3 (Solution)” block for masking + filters and comment the default `OrchestrationChatOptions options = new OrchestrationChatOptions(conf)` line.
   - In `GetPurchaseOrdersTask.java`, uncomment the “EXERCISE 3 (Solution)” call block with `try/catch` and comment the default call.
   - In `EscalateTask.java`, uncomment the “EXERCISE 3 (Solution)” block for masking and comment the default `OrchestrationChatOptions options = new OrchestrationChatOptions(config)` line.

2. Test strict prompt shielding:

   - Trigger the feature that invokes GetPurchaseOrdersTask.
   - If the prompt resembles an injection attempt, expect a 400 and a UI notification:
     “Prompt shielding blocked the input. Please modify your prompt or thresholds.”

3. Test email masking on escalation:
   - Trigger an escalation (EscalateTask).
   - Review the proposed email text.
   - Verify any email address appears as “EMAIL ADDRESS REMOVED”.

---

## Step 5: Troubleshooting

- If you don’t see redaction:

  - Verify the regex and that `withMaskingConfig(maskingConfig)` is applied to the same `OrchestrationModuleConfig` that builds your OrchestrationChatOptions.
  - Ensure you’re testing the path where masking is applied (both GetPurchaseOrdersTask and EscalateTask if you expect redaction in the escalation email).

- If the UI shows “Processing Result” forever:

  - Ensure the orchestration call is wrapped in try/catch and that you `ui.notify(...)` and return quickly on error.

- If strict filtering blocks too much:
  - Use ALLOW_SAFE_LOW_MEDIUM for a more permissive demo.

---

## Summary

You have successfully demonstrated masking and prompt shielding with the SAP Cloud SDK for AI and Spring AI.
Your agent now shows redacted email addresses in generated content and surfaces errors when prompt shielding blocks risky input.

> [!TIP]
> After you verify the behavior, you can comment the “Exercise 3” blocks (masking + filtering + error handling) in both classes and convert them into exercise steps, similar to Exercise 1 and Exercise 2. Keep concise instructions and code stubs so attendees can complete the exercise additively after Exercise 2.
