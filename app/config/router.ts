import * as express from 'express';
import { CuentaModel } from '../src/Models/CuentaModel';
import { CuentaEntity } from '../src/Entities/CuentaEntity';

// tslint:disable-next-line:variable-name
const _router = express.Router();

_router.get('/', (req, res) => {
    const cuenta = new CuentaModel();
    cuenta.monto = 0;
    cuenta.nombre = 'Santander';

    const daoCuenta = new CuentaEntity();
    daoCuenta.save(cuenta);

    res.json({
        message: 'Hello World!',
    });
});

export const router = _router;
