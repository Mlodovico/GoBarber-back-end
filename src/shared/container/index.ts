import { container } from 'tsyringe';

import IAppointmentsRepositories from '@modules/appointments/repositories/IAppointmentsRepositories';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepositories from '@modules/users/repositories/IUsersRepositories';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepositories>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepositories>(
  'UsersRepository',
  UsersRepository
);

