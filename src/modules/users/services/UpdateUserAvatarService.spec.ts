import AppError from '@shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able to update avatar', () => {
    const fakeUserRepository = new FakeUserRepository();
    const updateUserAvatarService = new UpdateUserAvatarService(
      fakeUserRepository,
    );
  });
});
