import express from 'express';
import AnnouncementController from '../../controllers/announcementController';
import authentication from '../../middleware/authentication';
import announcementValidation from '../../middleware/announcementValidation';
import announcementChecker from '../../middleware/announcementChecker';

const { isUserLoggedIn, isUserAdmin } = authentication;
const { createAnnouncementValidation, updateAnnouncementValidation } = announcementValidation;

const { doesAnnouncementExist, doesAnnouncementNameExist } = announcementChecker;
const announcementRouter = express.Router();

announcementRouter.post(
  '/add',
  isUserLoggedIn,
  isUserAdmin,
  createAnnouncementValidation,
  doesAnnouncementNameExist,
  AnnouncementController.addAnnouncement
);
announcementRouter.get('/', AnnouncementController.getAll);
announcementRouter.get('/title', AnnouncementController.getOneTitle);
announcementRouter.get('/:id', doesAnnouncementExist, AnnouncementController.getOneAnnouncement);
announcementRouter.delete(
  '/:id',
  isUserLoggedIn,
  isUserAdmin,
  doesAnnouncementExist,
  AnnouncementController.delete
);
announcementRouter.patch(
  '/:id',
  isUserLoggedIn,
  isUserAdmin,
  doesAnnouncementExist,
  updateAnnouncementValidation,
  AnnouncementController.AnnouncementUpdation
);

export default announcementRouter;
