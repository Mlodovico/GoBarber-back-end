import { startOfHour } from 'date-fns';

import AppError from '@shared/errors/AppError';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';

interface IRequestDTO {
  provider_id: string;
  date: Date;
};

class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentRepository) {}

  public async execute({ provider_id, date}: IRequestDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDay = await this.appointmentsRepository.findByDate(appointmentDate);

    if(findAppointmentInSameDay) {
      throw new AppError('This appointment is already booked', 401);
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  };
};

export default CreateAppointmentService
