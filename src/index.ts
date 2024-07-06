import { Server } from './core/customServer';
import { CorsMiddleware } from './core/middleware/cors.middleware';
import { ErrorMiddleware } from './core/middleware/error.middleware';
import { HTTPLoggerMiddleware } from './core/middleware/httpLogger.middleware';
import { ImageUploaderMiddleware } from './core/middleware/imageUploader.middleware';
import { ApartmentRouter } from './routers/Apartment.router';

// -------------- server init ---------------
const app = new Server();
app.connectToDB().then(() => {
  const PORT = parseInt(process.env.PORT as string);
  app.listen(PORT || 8080);
});

// -------------- MWs -----------------------
app.middleware(new CorsMiddleware());
app.middleware(new ImageUploaderMiddleware());
app.middleware(new HTTPLoggerMiddleware());

// -------------- Routers -------------------
app.route(new ApartmentRouter());

// -------------- Err MW --------------------
app.errorMiddleware(new ErrorMiddleware());
