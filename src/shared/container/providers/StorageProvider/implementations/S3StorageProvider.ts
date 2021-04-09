/* eslint-disable no-useless-return */
import fs from 'fs';
import path from 'path';
import aws, { S3 } from 'aws-sdk';
import uploadConfig from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

class DisckStorageProvider implements IStorageProvider {
    private client: S3;

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-2',
        });
    }

    public async saveFile(file: string): Promise<string> {
        const originalPath = path.resolve(uploadConfig.tmpFolder, file);

        const fileContent = await fs.promises.readFile(originalPath);

        const file_name_string = originalPath;

        const file_name_array = file_name_string.split('.');
        const ContentType = file_name_array[file_name_array.length - 1];

        if (!ContentType) {
            throw new Error('File not found.');
        }

        await this.client
            .putObject({
                Bucket: uploadConfig.config.aws.bucket,
                Key: file,
                ACL: 'public-read',
                Body: fileContent,
                ContentType,
                ContentDisposition: `inline; filename=${file}`,
            })
            .promise();

        await fs.promises.unlink(originalPath);

        return file;
    }

    public async deleteFile(file: string): Promise<void> {
        await this.client
            .deleteObject({
                Bucket: 'app-lctorres-bucket',
                Key: file,
            })
            .promise();
    }
}

export default DisckStorageProvider;
