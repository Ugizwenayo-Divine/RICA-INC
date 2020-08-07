import express from 'express';
import authentication from '../../middleware/authentication';
import HistoryController from '../../controllers/historyController';

const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  getAll,
  getAllStatusBased,
  getOneHistoryOrders,
  getCustomerHistoryOrders,
} = HistoryController;

const historyRouter = express.Router();

historyRouter.get('/', isUserLoggedIn, isUserAdmin, getAll);
historyRouter.get('/status/', isUserLoggedIn, isUserAdmin, getAllStatusBased);
historyRouter.get('/customer/:id', isUserLoggedIn, isUserAdmin, getCustomerHistoryOrders);
historyRouter.get('/:id', isUserLoggedIn, isUserAdmin, getOneHistoryOrders);

export default historyRouter;
