import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

class SessionsControllers {
  public async create(req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body;

  const authenticaUser = container.resolve(AuthenticateUserService)

  const newUserSession = await authenticaUser.execute({
    email,
    password,
  });

  delete newUserSession.user.password;

  return res.json(newUserSession);
  }
}

export default SessionsControllers;
