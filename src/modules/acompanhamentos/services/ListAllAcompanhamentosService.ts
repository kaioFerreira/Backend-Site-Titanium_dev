import { inject, injectable } from 'tsyringe';
import Acompanhamento from '../infra/typeorm/entities/Acompanhamento';
import IAcompanhamentosRepository from '../repositories/IAcompanhamentosRepository';

@injectable()
class ListAllUsersService {
    constructor(
        @inject('AcompanhamentosRepository')
        private acompanhamentoRepository: IAcompanhamentosRepository,
    ) {}

    public async execute(): Promise<Acompanhamento[]> {
        const acompanhamentos = await this.acompanhamentoRepository.findAllAcompanhamentos();

        return acompanhamentos;
    }
}

export default ListAllUsersService;
