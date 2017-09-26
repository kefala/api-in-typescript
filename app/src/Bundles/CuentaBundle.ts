import { BundleBase } from './BundleBase';
import { Router, Request, Response, NextFunction } from 'express';
import { DatabaseConnector } from '../../database/DatabaseConnector';
import { CuentaModel } from '../Models/Cuenta';
import { CuentaEntity } from '../Entities/Cuenta';

export class CuentaBundle extends BundleBase {
    public path: string = '/cuentas';

    public getAll(req: Request, res: Response, next: NextFunction): void {
        const cuenta = new CuentaModel();
        const cuentaEntity = new CuentaEntity();
        cuenta.name = 'Santander';
        cuentaEntity.getAll(cuenta).then((value) => {
            res.jsonp({cuentas: value});
        });
    }

    public get(req: Request, res: Response, next: NextFunction): void {
        const cuentaEntity = new CuentaEntity();
        cuentaEntity.get(req.params.id).then((cuenta: CuentaModel) => {
            res.jsonp(cuenta);
        });
    }

    public post(req: Request, res: Response, next: NextFunction): void {
        const cuenta = new CuentaModel();
        cuenta.name = req.body.name;
        const cuentaEntity = new CuentaEntity();
        cuentaEntity.save(cuenta).then((cuenta: CuentaModel) => {
            res.jsonp(cuenta);
        });
    }
}
