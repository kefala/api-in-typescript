import { Schema } from 'mongoose';
import { DatabaseConnector } from '../../database/DatabaseConnector';

const dbc = new DatabaseConnector();

export const CuentaSchema = new Schema({
    nombre: [{ type: String }]
});

export const CuentaModel = dbc.connection.model('Cuenta', CuentaSchema);
