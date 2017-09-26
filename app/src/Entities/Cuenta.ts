import { EntityBase } from './EntityBase';
import { ModelBase } from '../Models/ModelBase';

export class CuentaEntity extends EntityBase {

    constructor() {
        super();
        this.collection = 'cuentas';
    }
}
