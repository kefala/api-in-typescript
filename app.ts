import * as express from 'express';
import { DatabaseConnector } from './app/database/DatabaseConnector';
import { router } from './app/config/router';

class App {  
    public express;
    
    constructor () {
        this.express = express();
        this.bootstrap();
    }
    
    private bootstrap (): void {
        let connector = new DatabaseConnector();
        this.express.use('/', router);
    }
}

export default new App().express;