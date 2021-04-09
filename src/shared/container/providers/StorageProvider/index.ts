import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import DisckStorageProvider from './implementations/DisckStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';

import IStorageProvider from './models/IStorageProvider';

const providers = {
    disk: DisckStorageProvider,
    s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    providers[uploadConfig.driver],
);
