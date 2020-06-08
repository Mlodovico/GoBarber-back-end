import { Router } from 'express';
import appointmentRouter from './appointment.routes';
import usersRouter from './users.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);


export default routes;
