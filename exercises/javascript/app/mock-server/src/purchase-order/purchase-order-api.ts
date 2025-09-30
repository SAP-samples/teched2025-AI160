import { Router } from 'express';
import { middlewareForSet, middlewareForCreate, middlewareForEntity } from '../odata-helpers.js';
import { 
    getPurchaseOrderItems,
    findPurchaseOrderItem,
    getScheduleLineItems,
    findScheduleLineItem,
    createPurchaseOrderItemNote,
    getAllPurchaseOrderItemNotes
} from './purchase-order-model.js';
import { createLogger } from '@sap-cloud-sdk/util';

const logger = createLogger('purchase-order-api');
const router = Router();

// Purchase Order Item handlers (GET only with filtering and expansion)
const retrieveAllPurchaseOrderItems = function(req: any, res: any, next: any) {
    logger.debug('Reading purchase order item entity set');
    let items = getPurchaseOrderItems();
    
    // Handle $top parameter
    if (req.query.$top) {
        const topValue = parseInt(req.query.$top);
        if (!isNaN(topValue)) {
            logger.debug(`Limiting results to top ${topValue} items`);
            items = items.slice(0, topValue);
        }
    }
    
    // Handle $expand parameter for related entities
    if (req.query.$expand) {
        const expandParams = req.query.$expand.split(',').map((param: string) => param.trim());
        logger.debug(`Expanding related entities: ${expandParams.join(', ')}`);
        // The items already contain the expanded data in the mock,
        // so we don't need to do additional processing here
        // In a real implementation, you would fetch the related data
    }
    
    res.result = items;
    next();
};

const retrieveSinglePurchaseOrderItem = function(req: any, res: any, next: any) {
    logger.debug(`Reading purchase order item ${req.params.purchaseOrder}/${req.params.item}`);
    res.result = findPurchaseOrderItem(req.params.purchaseOrder, req.params.item);
    next();
};

// Schedule Line Item handlers (GET only)
const retrieveAllScheduleLineItems = function(req: any, res: any, next: any) {
    logger.debug('Reading schedule line item entity set');
    res.result = getScheduleLineItems();
    next();
};

const retrieveSingleScheduleLineItem = function(req: any, res: any, next: any) {
    logger.debug(`Reading schedule line item ${req.params.purchaseOrder}/${req.params.item}/${req.params.scheduleLine}`);
    res.result = findScheduleLineItem(req.params.purchaseOrder, req.params.item, req.params.scheduleLine);
    next();
};

// Purchase Order Item Note handlers (GET and POST only)
const createPurchaseOrderItemNoteHandler = function(req: any, res: any, next: any) {
    logger.debug('Creating purchase order item note');
    try {
        res.result = createPurchaseOrderItemNote(req.body.PurchaseOrder, req.body.PurchaseOrderItem, req.body);
        logger.info(`Created purchase order item note for ${req.body.PurchaseOrder}/${req.body.PurchaseOrderItem}`);
        next();
    } catch (error: any) {
        logger.error(`Error creating purchase order item note: ${error.message}`);
        res.status(400).json({
            "error": {
                "code": "INVALID_REQUEST",
                "message": {
                    "lang": "en",
                    "value": error.message
                }
            }
        });
    }
};

const retrieveAllPurchaseOrderItemNotes = function(req: any, res: any, next: any) {
    logger.debug('Reading all purchase order item notes');
    res.result = getAllPurchaseOrderItemNotes();
    next();
};

// Routes - Only GET for entities and POST for A_PurchaseOrderItemNote

// Purchase Order Item routes (GET only with filtering and expansion support)
router.get('/A_PurchaseOrderItem', retrieveAllPurchaseOrderItems, middlewareForSet());
router.get('/A_PurchaseOrderItem/:purchaseOrder/:item', retrieveSinglePurchaseOrderItem, middlewareForEntity());

// Schedule Line Item routes (GET only)
router.get('/A_PurchaseOrderScheduleLine', retrieveAllScheduleLineItems, middlewareForSet());
router.get('/A_PurchaseOrderScheduleLine/:purchaseOrder/:item/:scheduleLine', retrieveSingleScheduleLineItem, middlewareForEntity());

// Purchase Order Item Note routes (GET and POST)
router.get('/A_PurchaseOrderItemNote', retrieveAllPurchaseOrderItemNotes, middlewareForSet());
router.post('/A_PurchaseOrderItemNote', middlewareForCreate(createPurchaseOrderItemNoteHandler));

// Root service document
router.get('/', function(req: any, res: any): void {
    res.json({
        "d": {
            "EntitySets": [
                "A_PurchaseOrderItem", 
                "A_PurchaseOrderScheduleLine",
                "A_PurchaseOrderItemNote"
            ]
        }
    });
});

export default router;
