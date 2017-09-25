import { Router } from 'express';
import { CuentaBundle } from '../src/Bundles/CuentaBundle';

const cuentaBundle = new CuentaBundle();

let routerBundle: Router  = Router();

routerBundle = cuentaBundle.getBundle(routerBundle);

export const router = routerBundle;
