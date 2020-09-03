import AppError from '@shared/errors/AppError';

import FakeUserRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import ListProvidersService from './ListProvidersService';

let fakeUserRepository: FakeUserRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    listProviders = new ListProvidersService(
      fakeUserRepository,
    );
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'jdoe@hotmail.com',
      password: '123456'
    });

    const user2 = await fakeUserRepository.create({
      name: 'Jane Doe',
      email: 'jdoe@hotmail.com',
      password: '123456'
    });

    const loggedUser = await fakeUserRepository.create({
      name: 'Jhasmin Doe',
      email: 'jdoe@hotmail.com',
      password: '123456'
    });

    const provider = await listProviders.execute({
      user_id: loggedUser.id,
    })

    expect(provider).toEqual([user1, user2]);
  });
});
