# Exercise 3 - (Optional) Harmonization, Masking, and Prompt Shield

In this bonus exercise, we will use some of the features from AI Core's Orchestration modules to enhance the AI agent we build in the previous exercises.

In order to make this work, you will have to first conclude [Exercise 1](../ex1/README.md) and [Exercise 2](../ex2/README.md).
If you haven't done so, please finish these exercises first.

## Overview

In this task we will enhance the AI agent in the following ways:
- Using the harmonization feature of AI Core Orchestration to run the AI agent on different LLMs.
- Enabling the AI agent to automatically mask sensitive information.
- Adding a prompt shield to safeguard the AI agent against prompt injections.


## Step 1: Harmonization

Thanks to the AI Core Orchestration integration into the SAP Cloud SDK for AI, it is very simple to switch between different LLMs, even from completely different vendors.
All we have to do is to change the `OrchestrationAiModel` parameter in the `LlmConfig` when creating the `OrchestrationModuleConfig`.
To do this, locate the `resolveEscalation` in the `EscalateTask` class.
Here, change the line creating the `OrchestrationModuleConfig` by changing the `OrchestrationAiModel`.
You can simply do this by deleting ".CLAUDE_4_SONNET" and see what the IDE proposes as variables.
For example, you could try the following:
```java
OrchestrationModuleConfig config =
        new OrchestrationModuleConfig().withLlmConfig(OrchestrationAiModel.GPT_41);
```
This will use Chat GPT 4.1 as the LLM used for the AI agent.
Save your changes and run the app again to see what changed.
Especially in the mail draft, you will probably notice some differences.


## Step 2: Masking

STILL TBD!

## Step 3: Prompt Shield

STILL TBD!


## Summary

In this bonus exercise, you have successfully used Masking and the Prompt Shield feature to make the AI agent more robust and secure.
Also, you used AI Core Orchestration's harmonization feature to simply switch between different LLMs to run your AI agent.

This is the end of the workshop.
We hope you got a good introduction into the process of building AI agent-based solutions with the SAP Cloud SDk for AI and Spring AI.
