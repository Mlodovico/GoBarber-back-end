import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/users/repositories/IUsersRepositories';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../../infra/typeorm/entities/User';

class UsersRepository implements IUserRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User| undefined> {
    const userId = this.users.find(user => user.id === id);

    return userId;
  };


  public async findByEmail(email: string): Promise<User| undefined> {
    const userEmail = this.users.find(user => user.email === email);

    return userEmail;
  };

  public async create({ name, email, password }: ICreateUserDTO):
  Promise<User> {

    return newUser;
  };

  public async save(user: User): Promise<User> {
  }
}

export default UsersRepository;
