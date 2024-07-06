import { ApartmentController } from '../controllers/apartment.controller';
import { IRouterCustom } from '../core/interface/router.interface';
import { Router, IRouter } from 'express';

const apartmentController = new ApartmentController();

export class ApartmentRouter implements IRouterCustom {
  getRouter(): IRouter {
    const apartmentRouter = Router();

    apartmentRouter
      .route('/apartments')
      .get(apartmentController.getAll)
      .post(apartmentController.create);

    apartmentRouter.route('/apartments/:id').get(apartmentController.getOne);

    return apartmentRouter;
  }
}
