import express from 'express';
import multiparty from 'connect-multiparty';
import DesignController from '../../controllers/designController';
import authentication from '../../middleware/authentication';
import consultantChecker from '../../middleware/consultantChecker';
import consultantValidation from '../../middleware/consultantValidation';

const multipart = multiparty();

const {
  addDesign,
  getOneDesign,
  designUpdation,
  deleteOneDesign,
  getAll,
} = DesignController;
const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  createConsultantValidation,
  updateDesignValidation
} = consultantValidation;
const {
  doesDesignExist
} = consultantChecker;

const designRouter = express.Router();

designRouter.post('/add',multipart, isUserLoggedIn,isUserAdmin, createConsultantValidation,addDesign);
designRouter.get('/', getAll);
designRouter.get('/:id', doesDesignExist, getOneDesign);
designRouter.delete('/:id', isUserLoggedIn,isUserAdmin, doesDesignExist, deleteOneDesign);
designRouter.patch('/:id', multipart, isUserLoggedIn,isUserAdmin, doesDesignExist, updateDesignValidation, designUpdation);

export default designRouter;
