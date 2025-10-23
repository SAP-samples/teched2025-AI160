# Build Your Own AI Agent-Based Solution with the Generative AI Hub

This track introduces attendees to building AI agents using the [SAP Cloud SDK for AI (JavaScript)](https://github.com/SAP/ai-sdk-js) and [LangGraph](https://langchain-ai.github.io/langgraph/).

## 1. Prerequisite

1. For this exercise, you will use [VS Code](https://code.visualstudio.com) as the IDE.
Open the IDE by typing "Visual Studio Code" in the Windows search bar.
2. Open the terminal in VS Code by navigating to **Terminal -> New Terminal** from the top menu.
3. Clone the project repository by running the following command in the terminal:

    ```shell
    git clone https://github.com/SAP-samples/teched2025-AI160.git
    ```

    After cloning, you’ll see a new folder with the project’s name in the same location where you ran git clone.
    *(By default, this folder is created in the user directory, e.g. C:\Users\<user-name>\teched2025-AI160.)*

4. Go to **File** → **Open Folder**, and select the cloned folder.
5. Verify that Node.js (v22) and npm are installed by running the following commands in the terminal:

```shell
node -v
npm -v
```

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
