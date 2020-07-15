import FakeAppointmentsRepository from '../repositories/fakes/fakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('Create Appointment', async () => {
  const fakeAppointmentsRepository = new FakeAppointmentsRepository();
  const createAppoitment = new CreateAppointmentService(
    fakeAppointmentsRepository
  );

  const appointment = await createAppoitment.execute({
    date: new Date(),
    provider_id: '2354346456'
  });

  expect(appointment).toHaveProperty('id');
  expect(appointment.provider_id).toBe('2354346456')
});
