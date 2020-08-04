import express from 'express';
import multiparty from 'connect-multiparty';
import NewsController from '../../controllers/newsController';
import authentication from '../../middleware/authentication';
import newsValidation from '../../middleware/newsValidation';
import newsChecker from '../../middleware/newsChecker';

const multipart = multiparty();

const {
  addNews,
  getAll,
  getOneNews,
  deleteOneNews,
  newsUpdation,
} = NewsController;
const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  createNewsValidation,
  updateNewsValidation,
} = newsValidation;
const {
  doesNewsExist,
  doesNewsTitleExist,
} = newsChecker;

const newsRouter = express.Router();

newsRouter.post('/add',multipart, isUserLoggedIn,isUserAdmin, createNewsValidation, doesNewsTitleExist, addNews);
newsRouter.get('/', getAll);
newsRouter.get('/:id', doesNewsExist, getOneNews);
newsRouter.delete('/:id', isUserLoggedIn,isUserAdmin, doesNewsExist, deleteOneNews);
newsRouter.patch('/:id', multipart, isUserLoggedIn,isUserAdmin, doesNewsExist, updateNewsValidation, newsUpdation);

export default newsRouter;
