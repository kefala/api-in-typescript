import { BundleBase } from './BundleBase';
import { Router, Request, Response, NextFunction } from 'express';
import { Cuenta } from '../Models/CuentaModel';

export class CuentaBundle extends BundleBase {
    public path: string = '/cuentas';

    public getAll(req: Request, res: Response, next: NextFunction): void {
        const dao = new Cuenta();
        dao.get().then((cuentas) => {
            res.json({a: cuentas});
        }, () => {
            res.json({a: 'Error'});
        });
    }
}
