import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const appointmentRouter = Router();
const providersController = new ProvidersController();

appointmentRouter.use(ensureAuthenticated);

appointmentRouter.get('/', providersController.index);

export default appointmentRouter;
