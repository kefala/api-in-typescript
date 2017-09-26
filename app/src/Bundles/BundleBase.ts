import { Router, Request, Response, NextFunction } from 'express';

export abstract class BundleBase {
    public abstract path: string;

    public all(req: Request, res: Response, next: NextFunction): void {
        next();
    }
    public get(req: Request, res: Response, next: NextFunction): void {
        next(new Error('not implemented'));
    }
    public getAll(req: Request, res: Response, next: NextFunction): void {
        next(new Error('not implemented'));
    }
    public put(req: Request, res: Response, next: NextFunction): void {
        next(new Error('not implemented'));
    }
    public post(req: Request, res: Response, next: NextFunction): void {
        next(new Error('not implemented'));
    }
    public delete(req: Request, res: Response, next: NextFunction): void {
        next(new Error('not implemented'));
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
