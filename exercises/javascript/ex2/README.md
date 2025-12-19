# Exercise 2 - Escalating Overdue Items: Writing Data to S/4

In this exercise, you'll enable the AI agent to resolve a business escalation in an agentic way by creating a custom tool that writes data into SAP S/4HANA, completing the end-to-end workflow.

To make this work, you will have to first conclude [Exercise 1](../ex1/README.md).
If you haven't done so, please finish that exercise first.

## Step 1: Analyze the Note Creation Tool

Open [app/agent/src/tools/create-note.ts](../../javascript/app/agent/src/tools/create-note.ts) and review the implementation.

The `createNoteTool` defines a Zod schema that describes the tool's input parameters to the LLM:

```typescript
{
    name: 'create_note',
    description: 'Create a note for a specific purchase order item',
    schema: z.object({
        purchaseOrder: z.string().meta({ description: 'The purchase order number' }).min(1),
        purchaseOrderItem: z.string().meta({ description: 'The purchase order item number' }).min(1),
        noteText: z.string().meta({ description: 'The text content of the note' }).min(1),
        language: z.string().meta({ description: 'The language of the note. For example: \'DE\'' }).min(2).max(2)
    })
}
```

The LLM uses these schema descriptions to understand what parameters the tool needs.
It can automatically determine values like the `language` parameter by detecting the language of the input text (e.g., 'EN' for English, 'DE' for German).

Uncomment the following line in the `createNoteTool()` function body:

```typescript
return createNote(notesInfo);
```

The `createNote()` function is responsible for making the API call to the `A_PurchaseOrderItemNote` entity to create a note in the SAP S/4HANA system.

```typescript
async function createNote(request: CreateNoteRequestParam): Promise<any> {
    const url = new URL(`${BASE_URL_API_PURCHASEORDER_PROCESS_SRV}A_PurchaseOrderItemNote`);
    const { purchaseOrder, purchaseOrderItem, noteText, language } = request;
    const noteData = {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        PlainLongText: noteText,
        Language: language
    };
}
```

## Step 2: Add Human Message flow to Create Note

Navigate to the [app/agent/src/po-agent.ts](../../javascript/app/agent/src/po-agent.ts) file and uncomment the code in `createNote()` function.

```typescript
export async function createNote(note: any, config: any): Promise<MessageContent | undefined> {
    const humanMessage = `Please create a note for the following purchase order item:
Purchase Order: ${note.purchaseOrder}
Purchase Order Item: ${note.purchaseOrderItem}
Note Text: ${note.noteText}
`;

    let response = await app.invoke({ messages: [humanMessage] }, config);
    return response.messages.at(-1)?.content;
}
```

Remove the last line `return;`.

Here, the LLM is invoked with a human message that instructs it to create a note for a specific purchase order item.
Upon invocation, the LLM will call the `create_note` tool with the appropriate arguments.

## Step 3: Enable Note Creation in the Agent

In the `startPurchaseOrderAgent()` function, you'll see the system prompt already includes instructions for note creation:

```markdown
After drafting the email, check if user asks to create a note for PO items.
Always use the 'create_note' tool to create note.
Always confirm successful note creation to the user.
```

Uncomment the `createNoteTool` in the tools array in `po-agent.ts` to enable the tool for the agent:

```typescript
const tools: [] = [
    getPurchaseOrderItemsTool,
    calculateOverdueTool,
    formatPurchaseOrdersTool,
    createNoteTool
];
```

## Step 4: Test the Complete Workflow

Save all your changes and wait for the application to restart automatically.

Navigate to http://localhost:3002/ and test the complete flow:

1. Enter `Show me overdue PO items in plant DE01`
2. Click the email icon for an overdue item
3. Modify the draft email as needed
4. Finally, click the **Send** button to create a note

You should see a success notification confirming the email was sent.

## Step 5: Verify Note Creation in the Logs

Check the terminal logs to see the tool invocation and note creation details:

```bash
[agent] [2025-09-30T12:55:05.782Z] INFO     (server): Request: POST /api/agent/create-po-item-notes
[agent] Tool calls: [
[agent]   {
[agent]     id: 'call_sAMt8N9I0qEOfrgh9hYuA1Xz',
[agent]     name: 'create_note',
[agent]     args: {
[agent]       purchaseOrder: '4500000005',
[agent]       purchaseOrderItem: '20',
[agent]       noteText: 'Subject: Escalation: Overdue Purchase Order 4500000005 - Item 20\n' +
[agent]         '\n' +
[agent]         'Dear Administrator,\n' +
[agent]         '\n' +
[agent]         'The following purchase order item 20 (PO 4500000005, quantity 88 EA) is overdue for delivery to Distribution Center, Berlin.\n' +
[agent]         'This delay is impacting operations at plant M204 and may lead to stockouts and order fulfillment delays.\n' +
[agent]         'Please address this issue promptly.\n' +
[agent]         '\n' +
[agent]         'Please contact us via the email info@example.com if urgent.',
[agent]       language: 'EN'
[agent]     },
[agent]     type: 'tool_call'
[agent]   }
[agent] ]
[mock-server] [2025-09-30T12:55:32.275Z] INFO     (server): Request: POST /sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote
[mock-server] [2025-09-30T12:55:32.340Z] INFO     (purchase-order-api): Created purchase order item note for 4500000005/20
```

## Summary

**Congratulations!**

You have successfully built an AI agent that uses multiple tools to solve a complex business task with a *human-in-the-loop* workflow.
Your agent is able to interact with the user and write data to an S/4HANA system.

This is the end of the main part of the workshop.
There is *bonus* third exercise, where we will use features from the AI SDK and AI Core's Orchestration modules to enhance the AI agent.

Continue to [Exercise 3 - (Optional) Harmonization, Masking, and Prompt Shield](../ex3/README.md).
