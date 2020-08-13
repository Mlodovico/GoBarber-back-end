import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
  const { email } = req.body;

  const authenticaUser = container.resolve(SendForgotPasswordEmailService)

  await authenticaUser.execute({
    email,
  });

  return res.status(204).json();
  }
}

export default ForgotPasswordController;
