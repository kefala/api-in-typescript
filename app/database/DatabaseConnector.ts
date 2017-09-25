import { enviroment as env } from '../config/environment';
import * as mongoose from 'mongoose';

export class DatabaseConnector {

    public connection: mongoose.Connection;

    constructor() {
        this.connection = mongoose.createConnection(env.database.uri);
        this.kwonSchemas();
    }

    public kwonSchemas(): void {
        this.connection.on('error', console.error.bind(console, 'connection error:'));
    }

}
