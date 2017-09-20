import * as express from 'express';

const _router = express.Router();

_router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

export const router = _router;
