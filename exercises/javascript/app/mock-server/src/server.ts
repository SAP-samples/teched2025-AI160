import app from './app.js';
import { createLogger } from '@sap-cloud-sdk/util';
const logger = createLogger('server');

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        logger.error(`Error starting mock server: ${err}`);
    } else {
        logger.info(`Mock server started on port ${port}`);
    }
});
