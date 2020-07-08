import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';

const appointmentRouter = Router();

appointmentRouter.use(ensureAuthenticated);

//appointmentRouter.get('/', async (request, response) => {
//  console.log(request.user);
//
//  const appointments = await appointmentsRepository.find();
//
//  return response.status(200).json(appointments);
//
//});

appointmentRouter.post('/', async (request, response) => {
    const { provider_id, date } = request.body;
    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate
    });

    return response.status(200).json(appointment);
});

export default appointmentRouter;
