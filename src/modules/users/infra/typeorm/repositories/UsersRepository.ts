import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../entities/User';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User| undefined> {
    const userId = await this.ormRepository.findOne(id);

    return userId;
  };


  public async findByEmail(email: string): Promise<User| undefined> {
    const userEmail = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return userEmail;
  };

  public async create({ name, email, password }: ICreateUserDTO):
  Promise<User> {
    const newUser = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(newUser);

    return newUser;
  };

  public async save(user: User): Promise<User> {
    return this.ormRepository.create(user);
  }
}

export default UsersRepository;
