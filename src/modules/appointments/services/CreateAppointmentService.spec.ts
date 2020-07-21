import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
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

it('should be able to create two appointments on the same time', async () => {
  const fakeAppointmentsRepository = new FakeAppointmentsRepository();
  const createAppoitment = new CreateAppointmentService(
    fakeAppointmentsRepository,
  );

  const appointmentDate = new Date(2020, 7, 20, 23);

  expect(createAppoitment.execute({
    date: appointmentDate,
    provider_id: '2354346456',
  })).rejects.toBeInstanceOf(AppError);
})
