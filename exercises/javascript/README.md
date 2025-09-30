# Build Your Own AI Agent-Based Solution with the Generative AI Hub

This track introduces attendees to building AI agents using the [SAP Cloud SDK for AI (JavaScript)](https://github.com/SAP/ai-sdk-js) and [LangGraph](https://langchain-ai.github.io/langgraph/).

## 1. Prerequisite

1. Follow all the instructions as described in the [How to Start](../../README.md#getting-started) section.
2. The test system access details are pre-filled in the [.env](app/agent/.env), in the below format. 
```
AICORE_SERVICE_KEY='{"clientid": "<demo_credentials_clientid>","clientsecret": "<demo_credentials_clientsecret>","url": "<demo_credentials_url>","serviceurls": {"AI_API_URL": "<demo_credentials_serviceurls_AI_API_URL>"}}'
```
3. It is highly recommended to use an IDE like [VS Code](https://code.visualstudio.com) or [WebStorm](https://www.jetbrains.com/webstorm/).

## 2. Project Structure

The [project](./app) used for this session is a Purchase Order Management application with AI agent capabilities.

### 2.1 Dependencies

The necessary dependencies are specified in the `package.json` file. 
The SAP Cloud SDK for AI uses the scope [`@sap-ai-sdk`](https://www.npmjs.com/search?q=%40sap-ai-sdk), including [@sap-ai-sdk/langchain](https://www.npmjs.com/package/@sap-ai-sdk/langchain) for LangGraph integration.

### 2.2 Related Source Code

The application consists of three main components:

- **Agent ([agent/](./app/agent/))**: The AI agent server that handles purchase order analysis and escalation workflows.
  - The [po-agent.ts](./app/agent/src/po-agent.ts) file contains the main agent logic using the Orchestration LangChain client and LangGraph state graphs.
  - The [tools/](./app/agent/src/tools/) directory contains various tools the agent can use.
  - You will mainly work with these files during your exercises.

- **Mock Server ([mock-server/](./app/mock-server/))**: Simulates SAP S/4HANA Purchase Order APIs for testing.

- **UI ([ui/](./app/ui/))**: React frontend for interacting with the AI agent.

> [!NOTE]
> The agent will not function properly until the exercises are completed.

> [!TIP]
> The solutions to the exercises are provided but have been commented out. 
> We strongly recommend that you attempt to solve the exercises by writing the code yourself instead of just uncommenting or copying the solution. 
> This approach will allow you to experience the full developer workflow, including useful features like auto-completion and debugging. 
> By typing the code, you'll better understand the agent logic, discover useful functions, and build muscle memory, all of which contribute to a deeper learning experience.

### Exercises

The exercises demonstrate how to build AI agents using the SAP Cloud SDK for AI and LangGraph.
You'll learn to create state-based agents with tool calling capabilities and implement business logic through custom agent tools.


- [Preparation](ex0/README.md)
- [Exercise 1 - Implementing Overdue PO Items Detection Agent](ex1/README.md)
- [Exercise 2 - Implementing Note Creation](ex2/README.md)
- [Exercise 3 - (Optional) Filter and Mask Content using Orchestration Service features](ex3/README.md)

Start from [here](ex0/README.md).
