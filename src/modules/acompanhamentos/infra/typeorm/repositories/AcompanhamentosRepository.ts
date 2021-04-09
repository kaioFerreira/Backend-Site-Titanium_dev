import ICreateAcompanhamentoDTO from '@modules/acompanhamentos/dtos/ICreateAcompanhamentoDTO';
import IAcompanhamentosRepository from '@modules/acompanhamentos/repositories/IAcompanhamentosRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';

import Acompanhamento from '../entities/Acompanhamento';

@EntityRepository(Acompanhamento)
class AcompanhamentosRepository implements IAcompanhamentosRepository {
    private ormRepository: Repository<Acompanhamento>;

    constructor() {
        this.ormRepository = getRepository(Acompanhamento);
    }

    public async findAllAcompanhamentos(): Promise<Acompanhamento[]> {
        const acompanhamentos = await this.ormRepository.find({
            take: 100,
        });

        return acompanhamentos;
    }

    public async create(
        data: ICreateAcompanhamentoDTO,
    ): Promise<Acompanhamento> {
        const acompanhamento = this.ormRepository.create(data);

        await this.ormRepository.save(acompanhamento);

        return acompanhamento;
    }

    public async save(acompanhamento: Acompanhamento): Promise<Acompanhamento> {
        return this.ormRepository.save(acompanhamento);
    }
}

export default AcompanhamentosRepository;
