import AppError from '@shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';

import SendForgotPasswordServiceEmail from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover password using email', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordServiceEmail = new SendForgotPasswordServiceEmail(
      fakeUserRepository,
    );

    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johnDoe@gmail.com',
      password: '123456'
    });

    await sendForgotPasswordServiceEmail.execute({
      email: 'johnDoe@gmail.com'
    })

    expect(sendMail).toHaveBeenCalled();
  });
})
