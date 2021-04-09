import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllAcompanhamentosService from '@modules/acompanhamentos/services/ListAllAcompanhamentosService';
import CreateAcompanhamentoService from '@modules/acompanhamentos/services/CreateAcompanhamentoService';

export default class AcompanhamentoController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            acp_tipo,
            acp_data,
            acp_data_cadastro,
            acp_data_cumprimento,
            acp_data_evento,
            acp_data_prazo,
            acp_esp,
            acp_plt_id,
            acp_prc_id,
        } = request.body;

        const createAcompanhamento = container.resolve(
            CreateAcompanhamentoService,
        );

        const acompanhamento = await createAcompanhamento.execute({
            acp_tipo,
            acp_data,
            acp_data_cadastro,
            acp_data_cumprimento,
            acp_data_evento,
            acp_data_prazo,
            acp_esp,
            acp_plt_id,
            acp_prc_id,
        });

        return response.json(acompanhamento);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listAcompanhamento = container.resolve(
            ListAllAcompanhamentosService,
        );
        const acompanhamentos = await listAcompanhamento.execute();

        return response.json(acompanhamentos);
    }
}
