import { Router } from 'express';

import AcompanhamentoController from '../controllers/AcompanhamentoController';

const acompanhamentosRouter = Router();
const acompanhamentoController = new AcompanhamentoController();

acompanhamentosRouter.get('/', acompanhamentoController.index);

acompanhamentosRouter.post('/', acompanhamentoController.create);

export default acompanhamentosRouter;
