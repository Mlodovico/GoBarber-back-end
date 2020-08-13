import { Router } from 'express';

import ResetPasswordController from '../controllers/ResetPasswordController';
import ForgotPasswordController from '../controllers/ForgotPasswordController';

const resetPasswordController = new ResetPasswordController();
const forgotPasswordController = new ForgotPasswordController();
const passwordRouter = Router();

passwordRouter.post('/reset', resetPasswordController.create);
passwordRouter.post('/reset', forgotPasswordController.create);

export default passwordRouter;
