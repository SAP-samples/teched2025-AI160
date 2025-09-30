import { tool } from "@langchain/core/tools";
import * as z from 'zod/v4';
import { BASE_URL_API_PURCHASEORDER_PROCESS_SRV } from "../setup";
import { createLogger } from '@sap-cloud-sdk/util';

const logger = createLogger('create-note-tool');

export type CreateNoteRequestParam = {
    purchaseOrder: string;
    purchaseOrderItem: string;
    noteText: string;
    language: string;
};

export const createNoteTool = tool(
    async (notesInfo: CreateNoteRequestParam) => {
        // return createNote(notesInfo);
    },
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
);

async function createNote(
    request: CreateNoteRequestParam
): Promise<any> {
    const url = new URL(`${BASE_URL_API_PURCHASEORDER_PROCESS_SRV}A_PurchaseOrderItemNote`);
    const { purchaseOrder, purchaseOrderItem, noteText, language } = request;
    const noteData = {
        PurchaseOrder: purchaseOrder,
        PurchaseOrderItem: purchaseOrderItem,
        PlainLongText: noteText,
        Language: language
    };

    logger.debug(`Creating note with data: ${JSON.stringify(noteData, null, 2)}`);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error: any) {
        logger.error(`Error creating note: ${error.message}`);
        throw new Error(`Failed to create note: ${error.message}`);
    }
}
