import ICreateAcompanhamentoDTO from '../dtos/ICreateAcompanhamentoDTO';
import Acompanhamento from '../infra/typeorm/entities/Acompanhamento';

export default interface IAcompanhamentosRepository {
    create(data: ICreateAcompanhamentoDTO): Promise<Acompanhamento>;
    save(acompanhamento: Acompanhamento): Promise<Acompanhamento>;
    findAllAcompanhamentos(): Promise<Acompanhamento[]>;
}
