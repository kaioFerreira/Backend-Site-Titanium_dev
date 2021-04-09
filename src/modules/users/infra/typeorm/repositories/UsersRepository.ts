import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findAllUsers(): Promise<User[]> {
        const users = await this.ormRepository.find();

        return users;
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne(id);

        return user;
    }

    public async findByEmail(usr_email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ where: { usr_email } });

        return user;
    }

    public async create(userData: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create(userData);

        await this.ormRepository.save(user);

        return user;
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
}

export default UsersRepository;
