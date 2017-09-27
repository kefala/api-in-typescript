import { BundleBase } from './BundleBase';
import { Router, Request, Response, NextFunction } from 'express';
import { DatabaseConnector } from '../../database/DatabaseConnector';
import { CuentaModel } from '../Models/Cuenta';
import { CuentaEntity } from '../Entities/Cuenta';

export class CuentaBundle extends BundleBase {
    public path: string = '/cuentas';

    public getEntity(): CuentaEntity {
        const entity = new CuentaEntity();
        return entity;
    }

    public getModel(params): CuentaModel {
        const cuenta = new CuentaModel();
        cuenta.name = params.name;
        return cuenta;
    }
}
