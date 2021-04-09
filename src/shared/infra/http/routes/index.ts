import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import acompanhamentosRouter from '@modules/acompanhamentos/infra/http/routes/acompanhamentos.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/acompanhamentos', acompanhamentosRouter);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
