import { inject, injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import Acompanhamento from '../infra/typeorm/entities/Acompanhamento';
import AcompanhamentosRepository from '../infra/typeorm/repositories/AcompanhamentosRepository';
import IAcompanhamentosRepository from '../repositories/IAcompanhamentosRepository';

interface IRequest {
    acp_prc_id: string;
    acp_plt_id: string;
    acp_tipo: string;
    acp_esp: string;
    acp_data_cumprimento: string;
    acp_data_evento: string;
    acp_data_prazo: string;
    acp_data_cadastro: string;
    acp_data: string;
}

@injectable()
class CreateAcompanhamentoService {
    constructor(
        @inject('AcompanhamentosRepository')
        private acompanhamentoRepository: IAcompanhamentosRepository,
    ) {}

    public async execute({
        acp_data,
        acp_data_cadastro,
        acp_data_cumprimento,
        acp_data_evento,
        acp_data_prazo,
        acp_esp,
        acp_plt_id,
        acp_prc_id,
        acp_tipo,
    }: IRequest): Promise<Acompanhamento> {
        const acompanhamento = await this.acompanhamentoRepository.create({
            acp_data,
            acp_data_cadastro,
            acp_data_cumprimento,
            acp_data_evento,
            acp_data_prazo,
            acp_esp,
            acp_plt_id,
            acp_prc_id,
            acp_tipo,
        });

        return acompanhamento;
    }
}

export default CreateAcompanhamentoService;
