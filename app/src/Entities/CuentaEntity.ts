import * as Sequelize from 'sequelize';

import { DatabaseConnector } from '../../database/DatabaseConnector';
import { CuentaModel } from '../Models/CuentaModel';
import { EntityBase } from './EntityBase';

export class CuentaEntity extends EntityBase {

    constructor() {
        super();

        this.entity = this.dbc.connectionIntance.define('cuenta', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            monto: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });

        this.entity.sync();
    }

}
