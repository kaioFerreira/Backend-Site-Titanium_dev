import { DateTime } from 'aws-sdk/clients/ec2';

export default interface ICreateUserDTO {
    usr_nome: string;
    usr_email: string;
    usr_login: string;
    usr_senha: string;
    usr_telefone: string;
    usr_cpf: string;

    usr_ativo?: string;
    usr_data_cadastro: DateTime;
    usr_grp_id?: string;
    usr_oab?: string;
    usr_endereco?: string;
    usr_complemento?: string;
    usr_cidade?: string;
    usr_uf?: string;
    usr_banco?: string;
    usr_agencia?: string;
    usr_conta?: string;
    usr_valor_preposto?: string;
    usr_valor_advogado?: string;
    usr_valor_diligencia?: string;
}
