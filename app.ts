import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Express } from 'express';
import { DatabaseConnector } from './app/database/DatabaseConnector';
import { router } from './app/config/router';

class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.bootstrap();
    }

    private bootstrap(): void {
        const connector = new DatabaseConnector();
        this.express.use(bodyParser.json());
        this.express.use('/', router);
    }
}

export default new App().express;
