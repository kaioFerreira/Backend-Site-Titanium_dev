import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dbo.acompanhamento')
class Acompanhamento {
    @PrimaryGeneratedColumn('increment')
    acp_id: string;

    @Column('integer')
    acp_prc_id: string;

    @Column('integer')
    acp_plt_id: string;

    @Column()
    acp_tipo: string;

    @Column()
    acp_esp: string;

    @Column()
    acp_data_cumprimento: string;

    @Column()
    acp_data_evento: string;

    @Column()
    acp_data_prazo: string;

    @Column()
    acp_data_cadastro: string;

    @Column()
    acp_data: string;
}

export default Acompanhamento;
