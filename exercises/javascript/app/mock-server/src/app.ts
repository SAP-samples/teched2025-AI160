import express from 'express';
import purchaseOrderApi from './purchase-order/purchase-order-api.js';
import { createLogger } from '@sap-cloud-sdk/util';
const app = express();
const logger = createLogger('server');

const logRequests = function(req: any, res: any, next: any): void {
    logger.info(`Request: ${req.method} ${req.originalUrl}`);
    next();
};

const sendFakeCsrfToken = function(req: any, res: any, next: any): void {
    res.header('x-csrf-token', 'dummyToken123')
    res.header('set-cookie', ['cookie'])
    next()
}

app.use(logRequests);
app.use(sendFakeCsrfToken)

app.use('/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV', purchaseOrderApi);

app.get('/', function(req: any, res: any): void {
    res.set('Content-Type', 'text/html');
    res.send(`<html>
    <head>
        <title>OData Mock Service for Purchase Order API of SAP S/4HANA Cloud</title>
    </head>
    <body>
        <div>OData mock service for Purchase Order API is running at <a href="/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV">/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV</a>.</div>
    </body>
</html>`);
});

export default app;
