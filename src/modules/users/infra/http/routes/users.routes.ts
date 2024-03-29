import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import multer from 'multer';
import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig.multer);

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRouter.get('/', usersController.index);

usersRouter.post('/', usersController.create);

usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    userAvatarController.update,
);

export default usersRouter;
