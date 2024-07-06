import { IApartment, ApartmentModel } from '../models/Apartment.model';
import { BaseRepo } from './Base.repo';

export class ApartmentRepo extends BaseRepo<IApartment> {
  _collectionName: string = 'apartments';
  _model: Object = ApartmentModel;
}
