import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
class User {
    @PrimaryGeneratedColumn()
    usr_id: string;

    @Column()
    usr_data_cadastro: Date;

    @Column()
    usr_nome: string;

    @Column()
    usr_cpf: string;

    @Column()
    usr_login: string;

    @Column()
    usr_senha: string;

    @Column()
    usr_email: string;

    @Column()
    usr_grp_id: string;

    @Column()
    usr_ativo: string;

    @Column()
    usr_telefone: string;

    @Column()
    usr_oab: string;

    @Column()
    usr_endereco: string;

    @Column()
    usr_complemento: string;

    @Column()
    usr_cidade: string;

    @Column()
    usr_uf: string;

    @Column()
    usr_banco: string;

    @Column()
    usr_agencia: string;

    @Column()
    usr_conta: string;

    @Column()
    usr_valor_preposto: string;

    @Column()
    usr_valor_advogado: string;

    @Column()
    usr_valor_diligencia: string;
}

export default User;
