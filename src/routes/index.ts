import { Router } from 'express';
import connection from '../database/connection';

const routes = Router();

routes.get('/users', async (request, response) => {
    const registros = await connection('dbo.usuario').select('*');
    return response.json(registros);
});

export default routes;
