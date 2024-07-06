import mongoose from 'mongoose';
import { IApartment } from '../models/Apartment.model';
import { ApartmentRepo } from '../repositories/Apartment.repo';
import { BaseService } from './Base.service';

export class ApartmentService extends BaseService<IApartment> {
  _repoObj: ApartmentRepo = new ApartmentRepo();
}
