# Build Your Own AI Agent-Based Solution with the Generative AI Hub

This track introduces attendees to building AI agents using the [SAP Cloud SDK for AI (Java)](https://github.com/SAP/ai-sdk-java) and [SpringAI](https://spring.io/projects/spring-ai).

## 1. Prerequisite

1. Follow all the instructions as described in the [How to Start](../../README.md#getting-started) section.
2. The test system access details are pre-filled in the [.env file](../../.env), in the below format.
```
AICORE_SERVICE_KEY='{"clientid": "<demo_credentials_clientid>","clientsecret": "<demo_credentials_clientsecret>","url": "<demo_credentials_url>","serviceurls": {"AI_API_URL": "<demo_credentials_serviceurls_AI_API_URL>"}}'
```
3. It is highly recommended to use a modern IDE. On the demo laptops, Eclipse should be provided.

## 2. Project Structure
The [project](app/src/main/java/com/sap/demo) used for this session is a Purchase Order Management application with AI agent capabilities.
You will get more information in the exercises.

### 2.1 Dependencies
The necessary dependencies for the exercises are specified in the pom files.

### 2.2 Related Source Code

The application consists of the following main components:

- **Main class ([Application.java](app/src/main/java/com/sap/demo/Application.java))**: This class governs the main application flow of the demo app you are using.

- **The two task classes([GetPurchaseOrdersTask.java](app/src/main/java/com/sap/demo/GetPurchaseOrdersTask.java) and [EscalateTask.java](app/src/main/java/com/sap/demo/EscalateTask.java))**: These classes contain the code to run the agent we are using in this demo.
  **These are the only classes you have to change to solve the exercises.**

- **UI ([ui/](app/src/main/java/com/sap/demo/ui))**: The code to generate the frontend for interacting with the AI agent.

- **Tools ([tools/](app/src/main/java/com/sap/demo/tools))**: A collection of tools that the AI agent will use during the exercises.

> [!NOTE]
> The agent will not function properly until the exercises are completed.

> [!TIP]
> The solutions to the exercises are provided but have been commented out.
> We strongly recommend that you attempt to solve the exercises by writing the code yourself instead of just uncommenting or copying the solution.
> This approach will allow you to experience the full developer workflow, including useful features like auto-completion and debugging.
> By typing the code, you'll better understand the agent logic, discover useful functions, and build muscle memory, all of which contribute to a deeper learning experience.

### Exercises

The exercises demonstrate how to build AI agents using the SAP Cloud SDK for AI and SpringAI, focusing on:
- Building AI agents with tool calling capabilities
- Implementing business logic through agent tools
- Managing agent workflows

- [Preparation](./ex0/README.md)
- [Exercise 1 - Working with PO Items: Tool Usage and Data Fetching from S/4](./ex1/README.md)
- [Exercise 2 - Escalating overdue Items: _Human-in-the-loop_ Workflow and Writing Data to S/4](./ex2/README.md)
- [Exercise 3 - (Optional) Harmonization, Masking, and Prompt Shield](./ex3/README.md)

Start from [here](./ex0/README.md).