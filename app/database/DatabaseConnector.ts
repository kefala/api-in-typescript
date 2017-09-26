import { enviroment as env } from '../config/environment';
import { MongoClient, Db } from 'mongodb';
import { enviroment } from '../config/environment';

export class DatabaseConnector {
    private path: string = enviroment.database.uri;
    private connection: Promise<Db>;

    constructor() {
        this.connection = MongoClient.connect(this.path);
    }

    public getConnection(): Promise<Db> {
        return this.connection;
    }

}
