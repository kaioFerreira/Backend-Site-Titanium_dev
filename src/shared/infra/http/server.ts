import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from '@shared/infra/http/routes';
import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';

import '@shared/infra/typeorm';
import '@shared/container';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error 999999999',
    });
});

const httpServer = createServer(app);
const io = new Server(httpServer);

app.post('/msg', (req, res) => {
    const msg = req.body;

    io.emit('message', msg.name);

    res.json({ ok: true });
});

httpServer.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
});
