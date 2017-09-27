import { ModelBase } from '../Models/ModelBase';
import { Db, Collection, ObjectId } from 'mongodb';
import { DatabaseConnector } from '../../database/DatabaseConnector';

export abstract class EntityBase {
    public collection: string;
    private db: Promise<Db>;

    constructor() {
        this.db = new DatabaseConnector().getConnection();
    }

    public closeConnection(): void {
        this.db.then((db: Db) => {
            db.close();
        });
    }

    public getCollection(): string {
        return this.collection;
    }

    public save(value: ModelBase): Promise<ModelBase> {
        return new Promise((resolve, reject) => {
            this.getCollectionInstance().then((collection: Collection) => {
                collection.save(value, (err, data: ModelBase) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                    this.closeConnection();
                });
            });
        });
    }

    public get(id: string): Promise<ModelBase> {
        return new Promise((resolve, reject) => {
            if (!ObjectId.isValid(id)) {
                reject();
            } else {
                this.getCollectionInstance().then((collection: Collection) => {
                    collection.findOne({_id: new ObjectId(id)}, (err, item: ModelBase) => {
                        resolve(item);
                        this.closeConnection();
                    });
                });
            }
        });
    }

    public remove(id: string): Promise<ModelBase> {
        return new Promise((resolve, reject) => {
            if (!ObjectId.isValid(id)) {
                reject();
            } else {
                this.getCollectionInstance().then((collection: Collection) => {
                    collection.deleteOne({_id: new ObjectId(id)}, (err, item: ModelBase) => {
                        resolve(item);
                        this.closeConnection();
                    });
                });
            }
        });
    }

    public getCollectionInstance(): Promise<Collection> {
        return new Promise((resolve, reject) => {
            this.db.then((db: Db) => {
                resolve(db.collection((this.getCollection())));
                this.closeConnection();

            });
        });
    }

    public getAll(): Promise<ModelBase[]> {
        return new Promise((resolve, reject) => {
            this.getCollectionInstance().then((collection: Collection) => {
                collection.find().toArray((err, data: ModelBase[]) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                    this.closeConnection();
                });
            });
        });
    }

    public edit(id: string, value: ModelBase): Promise<ModelBase> {
        return new Promise((resolve, reject) => {
            if (!ObjectId.isValid(id)) {
                reject();
            } else {
                this.getCollectionInstance().then((collection: Collection) => {
                    collection.updateOne({_id: new ObjectId(id)}, value, (err, item: ModelBase) => {
                        resolve(item);
                        this.closeConnection();
                    });
                });
            }
        });
    }
}
