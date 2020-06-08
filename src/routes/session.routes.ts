import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticaUser = new AuthenticateUserService();

    const newUserSession = await authenticaUser.execute({
      email,
      password,
    });

    delete newUserSession.user.password;

    return response.json(newUserSession);

});

export default sessionRouter;
