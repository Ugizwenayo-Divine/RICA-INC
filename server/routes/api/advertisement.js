import express from 'express';
import multiparty from 'connect-multiparty';
import authentication from '../../middleware/authentication';
import advertisement from '../../middleware/advertisementChecker';
import AdvertisementController from '../../controllers/advertisementController';
import validation from '../../middleware/advertisementValidation';

const multipart = multiparty();

const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  doesAdvertisementExist
} = advertisement;
const {
  addAdvertisement,
  advertisementUpdation,
  deleteOneAdvertisement,
  getAll,
  getOneAdvertisement,
  getAllExternal,
  getAllInternal,
} = AdvertisementController;
const {
  advertisementValidation,
  updateValidation,
} = validation;

const advertisementRouter = express.Router();

advertisementRouter.post('/add',multipart, isUserLoggedIn,isUserAdmin, advertisementValidation, addAdvertisement);
advertisementRouter.get('/', getAll);
advertisementRouter.delete('/:id', isUserLoggedIn,isUserAdmin, doesAdvertisementExist, deleteOneAdvertisement);
advertisementRouter.patch('/:id', multipart, isUserLoggedIn,isUserAdmin, doesAdvertisementExist, updateValidation, advertisementUpdation);
advertisementRouter.get('/internal', getAllInternal);
advertisementRouter.get('/external', getAllExternal);
advertisementRouter.get('/:id', doesAdvertisementExist, getOneAdvertisement);

export default advertisementRouter;
