# Exercise 2 - Escalating overdue Items: _Human-in-the-loop_ Workflow and Writing Data to S/4

In this exercise, we will introduce more tools to our AI agent, enabling it to write data into the S/4 system and communicating with the user directly.

In order to make this work, you will have to first conclude [Exercise 1](../ex1/README.md).
If you haven't done so, please finish that exercise first.

## Overview

In this task we will enable the AI agent to resolve a business escalation in an agentic way and write data into the S/4 system.
In order to do this, we will perform the following steps:
 - Add a sensible user query for the escalation.
 - Give the AI access to a number of tools to solve this task on its own.

If you have any trouble solving the exercise, you can find the code to solve it commented out in the `EscalateTask` class.


## Step 1: Create the instructions for the AI Agent

Open [demo/EscalateTask.java](../app/src/main/java/com/sap/demo/EscalateTask.java) and locate the `resolveEscalation` method.
This  code is invoked if the user clicks on the "Escalate" button next to an overdue PO item in the table shown in the UI.
The returned object is of type `EscalationOutcome`, which is record class storing the necessary information of the escalation.
Right now, the `resolveEscalation` method simply returns an `EscalationOutcome` object with the text "Done".
To change this, first notice that we already provided the code that creates a `ChatClient` using Claude 4 Sonnet where tool usage is enabled. 

The first thing we need is a meaningful user query to tell the LLM what to do.
Note, that we again already provided a `SYSTEM_MESSAGE` with general behaviour guidelines for the LLM.
We advise to not change this system message if this is the first time you do this exercise to make sure everything works as expected.
Feel free to experiment with the system message once you completed all the exercises successfully.
The user query only needs to describe the actual task, for example as follows:
```java
String userQuery = "Please escalate for the following purchaseOrderItem %s, send email and save a note"
            .formatted(item.toString());
```

## Step 2: Create the necessary tool instances

Next, we create the instances of the tools that we will provide the AI agent with.
In contrast to the first exercise, this time the AI agent has multiple tools available and will be ble to freely choose which of them to use and in which order.
We guide the AI agent only through the system message and the UI interactions of the tools, which for some tools force to ask the user for feedback (so call _human-in-the-loop_ tools).

We provide an overview of the tools we will make available to the AI agent in the following.
Note that some of the tools get passed an object called `monitoringService`, an instance of the `PurchaseOrderMonitoringService` class.
This `monitoringService` governs the behaviour of the frontend of the Spring app.
Some tools need access to this so that they can interact with the UI, for example to show information to the user of the app.

The tools provided to the AI agent are the following.
- **AskUserTool**: This tool can be used by the AI agent to ask the user a brief question through the UI prompt system.
- **MailTool**: This tool can be used by the AI agent to send a mail. (This is mocked behaviour, we will not actually send out mails.)
- **SaveCommentTool**: This tool can be used by the AI agent to write a note to a PO item. This tool enables write access to the S/4 database.
- **DateTimeTool**: This tool can be used by the AI agent to get the current date and time. (This is hard for some LLMs to do on their own.)

In order to instantiate these tools, we can use the following code.
```java
AskUserTool askUserTool = new AskUserTool(ui);
MailTool mailTool = new MailTool(ui);
SaveCommentTool saveCommentTool = new SaveCommentTool(ui);
DateTimeTool dateTimeTool = new DateTimeTool();
```


## Step 3: Calling AI Core

We now have all the different pieces we need to define and enable our AI agent.
To actually do this, we will use the `ChatClient` similarly as we did in Exercise 1 and perform the following operations:

1. Set the prompt and system message.
```java
EscalationOutcome result = chatClient
    .prompt()
    .system(SYSTEM_MESSAGE)
    .user(userQuery)
```
2. Add the `OrchestrationChatOptions` object and the tools as described above.
```java
    .options(options)
    .tools(askUserTool, mailTool, saveCommentTool, dateTimeTool)
```
3. Call the LLM and specify the return format.
```java
    .call()
    .entity(EscalationOutcome.class);
```

4. Remove the now unnecessary creation of the `EscalationOutcome`.
```diff
- EscalationOutcome result = new EscalationOutcome(true, true, "Done");
```

In total, your `getPurchaseOrderItems()` method should look something like the following.
```java
public EscalationOutcome resolveEscalation(
      PurchaseOrderItem selectedPurchaseOrderItem,
      PurchaseOrderMonitoringService monitoringService) {
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

    // YOUR CODE END
    // ---------------------------------------- EXERCISE 2 ----------------------------------------

    return result;
  }
```


## Step 4: Test the Complete Workflow

Save your changes and restart the application.

Navigate to http://localhost:8080/ and test the code you have written:

1. Make sure you have a sensible user query in the input field of the UI (e.g., "Yield purchase order items for cities in Hessen.").
2. Click the **Execute Query** button
3. Locate an overdue PO item. (If there is none present, change the user query and click **Execute Query** again.)
4. Click **Escalate**.

You should get prompted by the app with a prompt regarding an e-mail draft.
You can answer the AI and change the draft. Once you are satisfied with it click **Okay** to let the AI agent handle the sending of the mail.
The AI agent will also write a note to this PO item that an escalation has happened.
This will write the note into the underlying S/4 database.


## Step 5: Understanding the Agent Workflow

So what happened under the hood here?
When you click **Escalate** the AI agent is presented with the system and user prompt from the `EscalateTask` class and the list of tools.
It will then figure out how to solve this task.
This usually includes writing a draft and presenting it to the user.
If the user is satisfied with the draft, the AI agent will send the mail and save the note to the PO item.


## Step 6: Test Different Scenarios

If you want, you can change the system or user prompt in the `EscalateTask` class and see what changes.
You could, for example, tell the AI agent in what tone (e.g., _funny_ or _angry_) the escalation mail should be written.


## Summary

You have successfully built an AI agent that uses multiple tools to solve a complex business task with a _human-in-the-loop_ workflow.
Your agent is able to interact with the user and write data to an S/4 system.
