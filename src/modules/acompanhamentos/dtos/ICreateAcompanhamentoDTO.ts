import { DateTime } from 'aws-sdk/clients/ec2';

export default interface ICreateAcompanhamentoDTO {
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
