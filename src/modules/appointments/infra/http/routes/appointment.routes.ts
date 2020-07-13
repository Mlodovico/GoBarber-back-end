import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentsController';

const appointmentRouter = Router();
const appointmentsController = new AppointmentController();

appointmentRouter.use(ensureAuthenticated);

//appointmentRouter.get('/', async (request, response) => {
//  console.log(request.user);
//
//  const appointments = await appointmentsRepository.find();
//
//  return response.status(200).json(appointments);
//
//});

appointmentRouter.post('/', appointmentsController.create);

export default appointmentRouter;
