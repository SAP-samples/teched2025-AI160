import {
    StateGraph,
    MessagesAnnotation,
    MemorySaver,
    START,
    END
} from '@langchain/langgraph';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { OrchestrationClient } from '@sap-ai-sdk/langchain';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import type { AIMessage, MessageContent } from '@langchain/core/messages';
import { createNoteTool } from './tools/create-note';
import { getPurchaseOrderItemsTool } from './tools/get-purchase-order-item';
import { formatPurchaseOrdersTool } from './tools/format-response';
import { calculateOverdueTool } from './tools/calculate-overdue';
import { buildAzureContentSafetyFilter, buildDpiMaskingProvider } from '@sap-ai-sdk/orchestration';

// Define the tools for the agent to use
const tools: any[] = [
    // getPurchaseOrderItemsTool,
    // calculateOverdueTool,
    // formatPurchaseOrdersTool,
    // createNoteTool
];

// Create a ToolNode with the defined tools
const toolNode = new ToolNode(tools);

// Create a model
// const model = new OrchestrationClient({
//     promptTemplating: {
//         model: {
//             name: 'gpt-5'
//         }
//     }
// }, { maxRetries: 0 });

// const modelWithTools = model.bindTools(tools);

async function shouldContinueAgent({ messages }: typeof MessagesAnnotation.State) {
    const lastMessage = messages.at(-1) as AIMessage;
    // if (lastMessage.tool_calls?.length) {
    //     console.log('Tool calls:', lastMessage.tool_calls);
    // }
    return lastMessage.tool_calls?.length ? 'tools' : END;
}

async function callModel({ messages }: typeof MessagesAnnotation.State) {
    // const response = await modelWithTools.invoke(messages);
    // return { messages: [response] };
}

const workflow = new StateGraph(MessagesAnnotation)
    .addNode('agent', callModel)
    .addNode('tools', toolNode)
    .addConditionalEdges('agent', shouldContinueAgent, ['tools', END])
    .addEdge('tools', 'agent')
    .addEdge(START, 'agent');

const memory = new MemorySaver();
const app = workflow.compile({ checkpointer: memory });

export async function startPurchaseOrderAgent(prompt: string, config: any): Promise<MessageContent | undefined> {
    const initMessages = [
        new SystemMessage(
            `You are an assistant for identifying overdue Purchase Order (PO) items and managing escalations.

**Core Tasks:**

1. Analyze overdue PO items
2. Draft an escalation email

## Analyze overdue PO items

**Process:**

1. Get PO items by calling the 'get_purchase_order_items' tool and filter the items based on the user prompt.
  - If you cannot apply the user input precisely to filter tool, then just get as many PO items as you can which matches the criterion.
  - Once you get all relevant PO items from the tool, filter the items again based on the user input by checking the content WITHOUT calling the tool.
  - Make sure you respect the user input and only return items that are asked by user.
  - For example, when user asks PO items to south germany, then you can call the tool with country filter 'DE' first, then filter the result again by checking city names if they are located in south Germany.
2. For each item, calculate if overdue by comparing delivery date to current date using 'calculate_overdue' tool. If the value is negative, the item is overdue.
3. Discard non-overdue items from further processing and return final result.

Always call the 'format_response_purchase_orders' tool to format PO items into a pure JSON in the final response.

Do NOT include any text in your response other than a valid JSON in the final response.
For example, the followings are NOT valid: Here is the ..., \`\`\`json { ... } \`\`\`

The final response should look like this: {"data": [ ... ] }

If user prompt is not relevant for searching PO items, simply return an empty list: {"data":[]}.

## Draft escalation email

For overdue items, analyze existing notes and draft a new escalation email.

The email should include: Purchase Order number, item number, quantity.

Example email template:

\`\`\`
Subject: Escalation: Overdue Purchase Order [PO Number] - Item [PO Item Number]

Dear Administrator,

The following purchase order item [Item Number] is overdue for delivery.
[Brief description of the business impact].
Please address this issue promptly.

Please contact us via the email info@example.com if urgent.
\`\`\`

After drafting the email, check if user asks to create a note for PO items.
Always use the 'create_note' tool to create note.
Always confirm successful note creation to the user.
`
        ),
        new HumanMessage(
            `Show me all overdue PO items based on the following user input: ${prompt}`
        )
    ];

    let response = await app.invoke({ messages: initMessages }, config);
    return response.messages.at(-1)?.content;
}

export async function createNote(note: any, config: any): Promise<MessageContent | undefined> {
//     const humanMessage = `Please create a note for the following purchase order item:
// Purchase Order: ${note.purchaseOrder}
// Purchase Order Item: ${note.purchaseOrderItem}
// Note Text: ${note.noteText}
// `;

//     let response = await app.invoke({ messages: [humanMessage] }, config);
//     return response.messages.at(-1)?.content;
       return;
}
