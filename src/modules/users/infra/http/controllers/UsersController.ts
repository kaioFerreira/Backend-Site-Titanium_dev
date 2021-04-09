import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';

export default class UsersController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            usr_nome,
            usr_cpf,
            usr_email,
            usr_login,
            usr_senha,
            usr_telefone,
            usr_endereco,
            usr_complemento,
            usr_cidade,
            usr_banco,
            usr_agencia,
            usr_conta,
            usr_valor_preposto,
            usr_valor_advogado,
            usr_valor_diligencia,
        } = request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            usr_nome,
            usr_cpf,
            usr_email,
            usr_login,
            usr_senha,
            usr_telefone,
            usr_endereco,
            usr_complemento,
            usr_cidade,
            usr_banco,
            usr_agencia,
            usr_conta,
            usr_valor_preposto,
            usr_valor_advogado,
            usr_valor_diligencia,
        });

        return response.json(user);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listUsers = container.resolve(ListAllUsersService);
        const reports = await listUsers.execute();

        return response.json(reports);
    }
}
