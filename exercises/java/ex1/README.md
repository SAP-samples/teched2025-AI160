# Exercise 1 - Working with PO Items: Tool Usage and Data Fetching from S/4

In this exercise, you will implement an AI agent that works with Purchase Order (PO) Items using specialized tools.
You'll learn to build agents with [SAP Cloud SDK for AI (Java)](https://github.com/SAP/ai-sdk-java) and [Spring AI](https://spring.io/projects/spring-ai).

## Overview

In this task we will enable an AI agent to obtain PurchaseOrders from an S/4 system.
In order to do this, we will perform the following steps:
- Set up a chat client able to connect with AI core.
- Give the AI agent access to the S/4 through a tool.

If you have any trouble solving the exercise, you can find the code to solve it commented out in the `GetPurchaseOrderTask` class.


## Step 1: Set up connection to AI Core

Open [demo/GetPurchaseOrderTask.java](../../src/main/java/com/sap/demo/GetPurchaseOrdersTask.java) and locate the `getPurchaseOrderItems` method.
Right now, it simply returns all PurchaseOrderItems through directly using the `ReadPurchaseOrderTool`.
But before we change this, we first need to set up the connection to AI Core.

1. Create an `OrchestrationModuleConfig` object and select the LLM to use (we suggest Claude 4 Sonnet as a start).
```java
OrchestrationModuleConfig config = new OrchestrationModuleConfig().withLlmConfig(OrchestrationAiModel.CLAUDE_4_SONNET);
```
2. Using that `OrchestrationModuleConfig` object, create an `OrchestrationChatOptions` object.
```java
OrchestrationChatOptions options = new OrchestrationChatOptions(config);
```
3. Create a `ChatClient` object. 
```java
ChatClient chatClient = ChatClient.create(new OrchestrationChatModel());
```

This `ChatClient` object can now be used to make calls to the specified LLM through AI Core.


## Step 2: Create the instructions for the AI Agent

Locate and read the `SYSTEM_MESSAGE` variable at the beginning of the `GetPurchaseOrderTask` class.
This is the main instructions we will use to tell the AI agent what to do.
We advise to not change this text right now and first perform the exercises with this system message.
Feel free, however, to change it and try out what happens once you have finished all exercises.

The second message we need is the user prompt that gets added during runtime.
In the `GetPurchaseOrderTask` class, we have access to that user prompt through the `userQuery` input.

Below the code you wrote for _Step 1_, add code for the following:
1. Create a `UserMessage` object from the provided `userQuery`.
```java
UserMessage userMessage = new UserMessage(userQuery);
```
2. Create a `Prompt` object from this `UserMessage`.
```java
Prompt userPrompt = new Prompt(userMessage);
```


## Step 3: Create a `ReadPurchaseOrderTool` instance

Next, we will create an instance of the `ReadPurchaseOrderTool` class.
This will be the tool that the AI agent can use to read data about Purchase Order items from our S/4 database.

First, in the `GetPurchaseOrderTask` class, delete the line `List<PurchaseOrderItem> result = new ReadPurchaseOrdersTool().getAllPurchaseOrders();`.
This line was simply using the `ReadPurchaseOrderTool.getAllPurchaseOrders()` method to read all the POs that are saved in the database and return them.
What we want to do instead, is to let the AI agent use this method to read all the POs from the database and then only return the important POs.

We will in the next step need an instance of the `ReadPurchaseOrderTool` to provide it to the AI agent.
Thus, we will create one now.
```java
ReadPurchaseOrdersTool tool = new ReadPurchaseOrdersTool();
```


## Step 4: Bringing it all together

We now have all the different pieces we need to define and enable our AI agent.
To actually do this, we will use the `ChatClient` object from Step 1 and perform the following operations:

1. Set the prompt and system message.
```java
List<PurchaseOrderItem> result = chatClient
          .prompt(userPrompt)
          .system(SYSTEM_MESSAGE)
```
2. Add the `OrchestrationChatOptions` object and the `ReadPurchaseOrderTool` from above.
```java
          .options(options)
          .tools(tool)
```
3. Call the LLM and specify the return format.
```java
          .call()
          .entity(new ParameterizedTypeReference<>() {});
```

In total, your `getPurchaseOrderItems()` method should look something like the following.
```java
  public List<PurchaseOrderItem> getPurchaseOrderItems(
      String userQuery, PurchaseOrderMonitoringService monitoringService) {
    // ---------------------------------------- EXERCISE 1 ----------------------------------------
    // YOUR CODE START
      OrchestrationModuleConfig config =
          new OrchestrationModuleConfig().withLlmConfig(OrchestrationAiModel.CLAUDE_4_SONNET);
      OrchestrationChatOptions options = new OrchestrationChatOptions(config);
      ChatClient chatClient = ChatClient.create(new OrchestrationChatModel());

      UserMessage userMessage = new UserMessage(userQuery);
      Prompt userPrompt = new Prompt(userMessage);

      ReadPurchaseOrdersTool tool = new ReadPurchaseOrdersTool();

      List<PurchaseOrderItem> result = chatClient
          .prompt(userPrompt)
          .system(SYSTEM_MESSAGE)
          .options(options)
          .tools(tool)
          .call()
          .entity(new ParameterizedTypeReference<>() {});

    // YOUR CODE END
    // ---------------------------------------- EXERCISE 1 ----------------------------------------

    writeNotification(result, monitoringService);
    return result;
  }
```

## Step 5: Test the Complete Workflow

Save your changes and restart the application.

Navigate to http://localhost:8080/ and test the code you have written:

1. Make sure you have a sensible user query in the input field of the UI (e.g., "Yield purchase order items for cities in Hessen.").
2. Click the **Execute Query** button

You should see the table populate with PO items from cities in the german state of Hessen.


## Step 6: Understanding the Agent Workflow

So what happened under the hood here?
When you clicked **Execute Query**, the prompt from the input field was sent as `userPrompt` to the LLM, together with the system prompt and a reference to the `ReadPurchaseOrderTool`.
The LLM then figured out to use the tool to query the S/4 database to receive all PO items.
Then, the LLM only returned the relevant PO items back to the frontend.
Notice, that the filter for "cities in Hessen" was performed by the LLM using outside knowledge and not via, say, an OData query to the S/4 system.


## Step 7: Test Different Scenarios

Try these queries in the input field of the UI to see how the agent interprets its prompt:

- "What PO items are scheduled for northern Germany?"
- "Show me all items being delivered to Germany."

In each of these calls, the AI agent will filter the PO items after it received all items from the S/4 system.


## Summary

You have successfully built an AI agent using the SAP Cloud SDK for AI and SpringAI.
Your agent is able to read data from an S/4 system and perform filtering operations on the data that a traditional OData query is unable to do.

In the next exercise, we will extend the AI agent to handle a more complex business task. 
For that, it will use multiple tools to respond to user queries and write data into the S/4 database.

Continue to [Exercise 2 - Escalating overdue Items: Writing Data to S/4](../ex2/README.md).