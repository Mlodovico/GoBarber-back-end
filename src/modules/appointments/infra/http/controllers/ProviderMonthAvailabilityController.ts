import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

class ProviderMonthAvailabilityController {
  public async index(req: Request, res: Response): Promise<Response> {
    const provider_id = req.params.id;
    const { month, year} = req.body;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year
    });

    return res.status(200).json(availability);
  };
}

export default ProviderMonthAvailabilityController;
