import { IApartment } from '../models/Apartment.model';
import { ApartmentService } from '../services/Apartment.service';
import { BaseController } from './Base.controller';

export class ApartmentController extends BaseController<IApartment> {
  _serviceObj: ApartmentService = new ApartmentService();
}
