import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticaUser = container.resolve(AuthenticateUserService)

    const newUserSession = await authenticaUser.execute({
      email,
      password,
    });

    delete newUserSession.user.password;

    return response.json(newUserSession);

});

export default sessionRouter;
