import express from 'express';
import multiparty from 'connect-multiparty';
import StudySupervisionController from '../../controllers/studySupervisionController';
import authentication from '../../middleware/authentication';
import consultantChecker from '../../middleware/consultantChecker';
import consultantValidation from '../../middleware/consultantValidation';

const multipart = multiparty();

const {
  addStudySupervision,
  getAll,
  getOneStudySupervision,
  studySupervisionUpdation,
  deleteOneStudySupervision,
} = StudySupervisionController;
const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  createConsultantValidation,
  updateStudyValidation
} = consultantValidation;
const {
  doesStudyExist
} = consultantChecker;

const studyRouter = express.Router();

studyRouter.post('/add',multipart, isUserLoggedIn,isUserAdmin, createConsultantValidation, addStudySupervision);
studyRouter.get('/', getAll);
studyRouter.get('/:id', doesStudyExist,getOneStudySupervision);
studyRouter.delete('/:id', isUserLoggedIn,isUserAdmin, doesStudyExist, deleteOneStudySupervision);
studyRouter.patch('/:id', multipart, isUserLoggedIn,isUserAdmin, doesStudyExist, updateStudyValidation, studySupervisionUpdation);

export default studyRouter;
