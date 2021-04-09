import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
    usr_nome: string;
    usr_cpf: string;
    usr_login: string;
    usr_senha: string;
    usr_email: string;
    usr_telefone: string;

    usr_uf?: string;
    usr_grp_id?: string;
    usr_ativo?: string;
    usr_oab?: string;
    usr_endereco?: string;
    usr_complemento?: string;
    usr_cidade?: string;
    usr_banco?: string;
    usr_agencia?: string;
    usr_conta?: string;
    usr_valor_preposto?: string;
    usr_valor_advogado?: string;
    usr_valor_diligencia?: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        usr_cpf,
        usr_email,
        usr_login,
        usr_nome,
        usr_senha,
        usr_telefone,
        usr_agencia,
        usr_ativo,
        usr_uf,
        usr_banco,
        usr_cidade,
        usr_complemento,
        usr_conta,
        usr_endereco,
        usr_grp_id,
        usr_oab,
        usr_valor_advogado,
        usr_valor_diligencia,
        usr_valor_preposto,
    }: IRequest): Promise<User> {
        const checkUserExist = await this.usersRepository.findByEmail(
            usr_email,
        );

        if (checkUserExist) {
            throw new AppError('Email address already used.');
        }

        const hashedPassword = await this.hashProvider.generatedHash(usr_senha);

        const dateTime = new Date();
        const user = await this.usersRepository.create({
            usr_data_cadastro: dateTime,
            usr_uf,
            usr_cpf,
            usr_email,
            usr_login,
            usr_nome,
            usr_senha: hashedPassword,
            usr_telefone,
            usr_agencia,
            usr_ativo,
            usr_banco,
            usr_cidade,
            usr_complemento,
            usr_conta,
            usr_endereco,
            usr_grp_id,
            usr_oab,
            usr_valor_advogado,
            usr_valor_diligencia,
            usr_valor_preposto,
        });

        return user;
    }
}

export default CreateUserService;
