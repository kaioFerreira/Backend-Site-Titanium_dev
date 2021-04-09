import nodemailer, { Transporter } from 'nodemailer';
import aws from 'aws-sdk';
import mailConfig from '@config/mail';

import { inject, injectable } from 'tsyringe';
import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

const ses = new aws.SES({
    apiVersion: '2010-12-01',
    region: 'us-east-2',
});

@injectable()
export default class SESMailProvider implements IMailProvider {
    private cliente: Transporter;

    constructor(
        @inject('MailTemplateProvider')
        private mailTemplateProvider: IMailTemplateProvider,
    ) {
        this.cliente = nodemailer.createTransport({
            SES: { ses, aws },
        });
    }

    public async sendMail({
        to,
        subject,
        templateData,
    }: ISendMailDTO): Promise<void> {
        const { email, name } = mailConfig.defaults.from;
        await this.cliente.sendMail({
            from: {
                name,
                address: email,
            },
            to: {
                name: to.name,
                address: to.email,
            },
            subject,
            html: await this.mailTemplateProvider.parse(templateData),
        });
    }
}
