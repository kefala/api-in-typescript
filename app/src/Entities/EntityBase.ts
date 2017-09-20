import * as Sequelize from 'sequelize';

import { DatabaseConnector } from '../../database/DatabaseConnector';
import { ModelBase } from '../Models/ModelBase';

export abstract class EntityBase {
    public dbc: DatabaseConnector;
    public entity: Sequelize.Model<{}, {}>;

    constructor() {
        this.dbc = new DatabaseConnector();
    }

    public save(model: ModelBase): void {
        this.entity.create(model);
    }

}
