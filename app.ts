import * as express from 'express';
import { DatabaseConnector } from './app/database/DatabaseConnector';

class App {  
    public express;
    
    constructor () {
        this.express = express();
        this.mountRoutes();
    }
    
    private mountRoutes (): void {
        const router = express.Router();
        let connector = new DatabaseConnector();
        
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            });
        });
        
        this.express.use('/', router);
    }
}

export default new App().express;