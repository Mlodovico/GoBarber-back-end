import AppError from '@shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUser = new CreateUserService(
      fakeUserRepository,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@yahoo.com.br',
      password: '123456'
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@yahoo.com.br');
    expect(user.password).toBe('123456');
  });

  it('should not be able to create a new user with the same email from another',
  async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUser = new CreateUserService(
      fakeUserRepository,
    );

    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@yahoo.com.br',
      password: '123456'
    });

    expect(createUser.execute({
      name: 'John Doe',
      email: 'johndoe@yahoo.com.br',
      password: '123456'
    })).rejects.toBeInstanceOf(AppError);
  });
});
