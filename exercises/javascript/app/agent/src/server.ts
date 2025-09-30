import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import { Router } from 'express';
import { startPurchaseOrderAgent, createNote } from './po-agent';
import { createLogger} from '@sap-cloud-sdk/util';

const app = express();
const router = Router();
const logger = createLogger('server');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req: any, res: any, next: any): void {
    logger.info(`Request: ${req.method} ${req.originalUrl}`);
    next();
});

// Analyze purchase orders endpoint
router.get('/trigger-agent', async (req, res) => {
    try {
        if (typeof req.headers['x-thread-id'] !== 'string' || !req.headers['x-thread-id']) {
            throw new Error('x-thread-id header is required and must be a string');
        }
        const thread_id = (req.headers['x-thread-id'] as string);
        const config = { configurable: { thread_id } };
        logger.debug('thread_id:', thread_id);

        const prompt = (req.query.prompt as string) ?? 'Consider all purchase order items';
        
        const result = await startPurchaseOrderAgent(prompt, config);

        const purchaseOrders = result ? JSON.parse(result.toString()).data : null;
        
        res.json({
            success: true,
            prompt,
            purchaseOrders,
            timestamp: new Date().toISOString()
        });
        
    } catch (error: any) {
        logger.error(`Error in analyze endpoint: ${error.message}`);
        res.status(error.cause.response.status).json(error.cause.response.data);
    }
});

// Create note endpoint
router.post('/create-po-item-notes', async (req: any, res: any) => {
    try {
        if (typeof req.headers['x-thread-id'] !== 'string' || !req.headers['x-thread-id']) {
            throw new Error('x-thread-id header is required and must be a string');
        }
        const thread_id = (req.headers['x-thread-id'] as string);
        const config = { configurable: { thread_id } };

        const { purchaseOrder, purchaseOrderItem, noteText } = req.body;
        
        if (!purchaseOrder || !purchaseOrderItem || !noteText) {
            return res.status(400).json({
                error: 'Missing required parameters',
                message: 'purchaseOrder, purchaseOrderItem, and noteText are required'
            });
        }
        const result = await createNote({
            purchaseOrder,
            purchaseOrderItem,
            noteText
        }, config);
        
        res.json({
            success: true,
            result,
            timestamp: new Date().toISOString()
        });
        
    } catch (error: any) {
        logger.error('Error in create-note endpoint:', error);
        res.status(500).json({
            error: 'Note creation failed',
            message: error.message
        });
    }
});

// Health check for agent routes
router.get('/health', (req: any, res: any) => {
    res.json({
        status: 'healthy',
        service: 'AI Agent Routes',
        timestamp: new Date().toISOString()
    });
});

app.use('/api/agent', router);


// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
    logger.error(`Error: ${err}`);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    logger.info(`AI Agent server started on port ${port}`);
});
