import { enviroment as env } from '../config/environment';
import * as Sequelize from 'sequelize';

export class DatabaseConnector {
    public connectionIntance: Sequelize.Sequelize;
    
    constructor() {
        this.connectionIntance = new Sequelize(env.database.uri);
        this.authenticate();
    }
    
    private authenticate():void {
        this.connectionIntance
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }
}
