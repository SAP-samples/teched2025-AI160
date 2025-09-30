import { data as purchaseOrderItemsData } from './purchase-order-data.js';

// Helper functions for Purchase Order Items
export const getPurchaseOrderItems = function () {
    return purchaseOrderItemsData.d.results;
};

export const findPurchaseOrderItem = function (purchaseOrderId: string, itemId: string) {
    return getPurchaseOrderItems().find(function (element) {
        return element.PurchaseOrder == purchaseOrderId && element.PurchaseOrderItem == itemId;
    });
};

// Helper functions for Schedule Line Items
export const getScheduleLineItems = function () {
    const scheduleLines: any[] = [];
    getPurchaseOrderItems().forEach((item: any) => {
        if (item.to_ScheduleLine && item.to_ScheduleLine.results) {
            item.to_ScheduleLine.results.forEach((scheduleLine: any) => {
                scheduleLines.push(scheduleLine);
            });
        }
    });
    return scheduleLines;
};

export const findScheduleLineItem = function (purchaseOrderId: string, itemId: string, scheduleLineId: string) {
    return getScheduleLineItems().find(function (element) {
        return element.PurchasingDocument == purchaseOrderId && 
               element.PurchasingDocumentItem == itemId && 
               element.ScheduleLine == scheduleLineId;
    });
};

// Helper function to create purchase order item note
export const createPurchaseOrderItemNote = function (purchaseOrderId: string, itemId: string, noteData: any) {
    const purchaseOrderItem = findPurchaseOrderItem(purchaseOrderId, itemId);
    if (!purchaseOrderItem) {
        throw new Error(`Cannot create note: Purchase order item with PurchaseOrder ${purchaseOrderId} and PurchaseOrderItem ${itemId} does not exist.`);
    }
    
    const textObjectType = noteData.TextObjectType || "F03";
    const language = noteData.Language || "EN";
    
    // Create a new note object according to the spec
    const newNote = {
        "__metadata": {
            "id": `https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='${purchaseOrderId}',PurchaseOrderItem='${itemId}',TextObjectType='${textObjectType}',Language='${language}')`,
            "uri": `https://{host}:{port}/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrderItemNote(PurchaseOrder='${purchaseOrderId}',PurchaseOrderItem='${itemId}',TextObjectType='${textObjectType}',Language='${language}')`,
            "type": "API_PURCHASEORDER_PROCESS_SRV.A_PurchaseOrderItemNoteType"
        },
        "PurchaseOrder": purchaseOrderId,
        "PurchaseOrderItem": itemId,
        "TextObjectType": textObjectType,
        "Language": language,
        "PlainLongText": noteData.PlainLongText || ""
    };
    
    // Initialize notes array if it doesn't exist
    if (!purchaseOrderItem.to_PurchaseOrderItemNote) {
        purchaseOrderItem.to_PurchaseOrderItemNote = { "results": [] };
    }
    
    // Add the note to the purchase order item
    purchaseOrderItem.to_PurchaseOrderItemNote.results.push(newNote);
    
    return newNote;
};

// Helper functions for Purchase Order Item Notes
export const getPurchaseOrderItemNotes = function (purchaseOrderId: string, itemId: string) {
    const purchaseOrderItem = findPurchaseOrderItem(purchaseOrderId, itemId);
    if (!purchaseOrderItem) {
        throw new Error(`Cannot get notes: Purchase order item with PurchaseOrder ${purchaseOrderId} and PurchaseOrderItem ${itemId} does not exist.`);
    }
    
    if (!purchaseOrderItem.to_PurchaseOrderItemNote || !purchaseOrderItem.to_PurchaseOrderItemNote.results) {
        return [];
    }
    
    return purchaseOrderItem.to_PurchaseOrderItemNote.results;
};

export const getAllPurchaseOrderItemNotes = function () {
    const allNotes: any[] = [];
    getPurchaseOrderItems().forEach((item: any) => {
        if (item.to_PurchaseOrderItemNote && item.to_PurchaseOrderItemNote.results) {
            item.to_PurchaseOrderItemNote.results.forEach((note: any) => {
                allNotes.push(note);
            });
        }
    });
    return allNotes;
};

export const findPurchaseOrderItemNote = function (purchaseOrderId: string, itemId: string, textObjectType: string, language: string) {
    const notes = getPurchaseOrderItemNotes(purchaseOrderId, itemId);
    return notes.find(function (note) {
        return note.PurchaseOrder == purchaseOrderId && 
               note.PurchaseOrderItem == itemId && 
               note.TextObjectType == textObjectType &&
               note.Language == language;
    });
};

export const data = purchaseOrderItemsData;
