import app from './app.js';
import { createLogger } from '@sap-cloud-sdk/util';
const logger = createLogger('server');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`Mock server started on port ${port}`);
});
