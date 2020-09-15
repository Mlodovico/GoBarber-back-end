import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providerRoutes = Router();

const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providerRoutes.use(ensureAuthenticated);

providerRoutes.get('/', providersController.index);
providerRoutes.get('/:id/month-availability', providerMonthAvailabilityController.index);
providerRoutes.get('/:id/day-availability', providerDayAvailabilityController.index);


export default providerRoutes;
