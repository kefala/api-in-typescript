import { CuentaModel } from '../Schemas/CuentaEntity';

export class Cuenta {
    public model = CuentaModel;

    public get() {
        return new Promise((resolve, reject) => {
            this.model.find({}, (err, data) => {
                const response = data;

                if (err) {
                    reject(err);
                } else {
                    resolve(response);
                }
            });
        });
    }
}
