import { Router, Request, Response, NextFunction } from 'express';
import { EntityBase } from '../Entities/EntityBase';
import { ModelBase } from '../Models/ModelBase';

export abstract class BundleBase {
    public path: string;

    public abstract getEntity(): EntityBase;
    public abstract getModel(params): ModelBase;

    public all(req: Request, res: Response, next: NextFunction): void {
        next();
    }

    public getAll(req: Request, res: Response, next: NextFunction): void {
        const entity = this.getEntity();
        entity.getAll().then((value: ModelBase[]) => {
            res.json(value);
        });
    }
    public get(req: Request, res: Response, next: NextFunction): void {
        const entity = this.getEntity();
        entity.get(req.params.id).then((model: ModelBase) => {
            res.jsonp(model);
        }, () => {
            this.errorHandler(res);
        });
    }

    public post(req: Request, res: Response, next: NextFunction): void {
        const model = this.getModel(req.body);
        const entity = this.getEntity();
        entity.save(model).then((newModel: ModelBase) => {
            res.jsonp(newModel);
        });
    }

    public delete(req: Request, res: Response, next: NextFunction): void {
        const entity = this.getEntity();
        entity.remove(req.params.id).then((modelDeleted: ModelBase) => {
            res.jsonp(modelDeleted);
        }, () => {
            this.errorHandler(res);
        });
    }

    public put(req: Request, res: Response, next: NextFunction): void {
        const model = this.getModel(req.body);
        const entity = this.getEntity();
        entity.edit(req.params.id, model).then((updatedModel: ModelBase) => {
            res.jsonp(updatedModel);
        });
    }

    public errorHandler(res: Response) {
        res.sendStatus(500);
    }

    public getBundle(router: Router): Router {
        router
        .route(this.path)
        .all((req: Request, res: Response, next: NextFunction) => {
            this.all(req, res, next);
        })
        .get((req: Request, res: Response, next: NextFunction) => {
            this.getAll(req, res, next);
        })
        .post((req: Request, res: Response, next: NextFunction) => {
            this.post(req, res, next);
        });

        router
        .route(this.path + '/:id')
        .all((req: Request, res: Response, next: NextFunction) => {
            this.all(req, res, next);
        })
        .get((req: Request, res: Response, next: NextFunction) => {
            this.get(req, res, next);
        })
        .put((req: Request, res: Response, next: NextFunction) => {
            this.put(req, res, next);
        })
        .delete((req: Request, res: Response, next: NextFunction) => {
            this.delete(req, res, next);
        });

        return router;
    }
}
