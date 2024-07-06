import { IMiddleware } from '../interface/middleware.interface';
import multer from 'multer';
import path from 'path';

export class ImageUploaderMiddleware implements IMiddleware {
  getMiddleware() {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    });

    const fileFilter = (
      req: Express.Request,
      file: Express.Multer.File,
      cb: multer.FileFilterCallback
    ) => {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    };

    return multer({
      storage: storage,
      fileFilter: fileFilter,
      limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB file size
    }).single('file');
  }
}
