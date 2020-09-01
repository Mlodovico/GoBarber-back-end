import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppoitment: CreateAppointmentService;

describe('Create Appointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppoitment = new CreateAppointmentService(
    fakeAppointmentsRepository
    );
  });

  it('should be able to create an appointment', async () => {
    const appointment = await createAppoitment.execute({
      date: new Date(),
      provider_id: '2354346456'
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('2354346456');
  });

  it('should be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 7, 20, 23);

    expect(createAppoitment.execute({
      date: appointmentDate,
      provider_id: '2354346456',
    })).rejects.toBeInstanceOf(AppError);
  });
});
