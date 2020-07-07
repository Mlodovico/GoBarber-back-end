import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm'

import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppError from '@shared/errors/AppError';

interface RequestDTO {
  provider_id: string;
  date: Date;
};

class CreateAppointmentService {
  public async execute({ provider_id, date}: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDay = await appointmentsRepository.findByDate(appointmentDate);

    if(findAppointmentInSameDay) {
      throw new AppError('This appointment is already booked', 401);
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment)

    return appointment;
  };
};

export default CreateAppointmentService
