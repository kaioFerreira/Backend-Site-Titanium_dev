import User from '@modules/users/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
// import path from 'path';
// import uploadConfig from '@config/upload';
// import fs from 'fs';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
    user_id: string;
    name: string;
    occupation: string;
    phone: string;
    email: string;
    old_password?: string;
    password?: string;
}

@injectable()
class UpdateUserProfileService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        user_id,
        name,
        email,
        occupation,
        phone,
        old_password,
        password,
    }: IRequest): Promise<User> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        const userWithUpdatedEmail = await this.usersRepository.findByEmail(
            email,
        );

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError('E-mail already in use.');
        }

        user.name = name;
        user.email = email;
        user.occupation = occupation;
        user.phone = phone;
        if (password && !old_password) {
            throw new AppError(
                'You need to inform the old password to set a new password.',
            );
        }

        if (password && old_password) {
            const checkOldPassword = await this.hashProvider.compareHash(
                old_password,
                user.password,
            );

            if (!checkOldPassword) {
                throw new AppError('Old password does not match.');
            }

            user.password = await this.hashProvider.generatedHash(password);
        }

        return this.usersRepository.save(user);
    }
}

export default UpdateUserProfileService;
