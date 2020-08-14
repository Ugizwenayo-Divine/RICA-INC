import express from 'express';
import OrdersController from '../../controllers/ordersController';
import authentication from '../../middleware/authentication';
import OrdersChecker from '../../middleware/ordersChecker';
import orderMiddleware from '../../middleware/orderValidation';
import PaymentController from '../../controllers/paymentController';

const {
  addOrders,
  getAll,
  getOneOrders,
  deleteOneOrders,
  getClientOrders,
  getOneClientOrder,
  clientOrderCanceled,
  getAllStatusBased,
  getOnePayedOrders,
  clientOrderdelivered,
} = OrdersController;
const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  doesOrdersExist,
  doesOrderedProductExist,
  isOrderYours,
  isOrderPayed,
} = OrdersChecker;
const {
  orderValidation,
} = orderMiddleware;
const {
  orderPaymentCreation,
} = PaymentController;

const ordersRouter = express.Router();

ordersRouter.post('/add', isUserLoggedIn, doesOrderedProductExist, orderValidation, addOrders);
ordersRouter.get('/', isUserLoggedIn, isUserAdmin, getAll);
ordersRouter.get('/status-based/', isUserLoggedIn, isUserAdmin, getAllStatusBased);
ordersRouter.get('/client-orders', isUserLoggedIn, getClientOrders);
ordersRouter.get('/payed-orders', isUserLoggedIn, isUserAdmin, getOnePayedOrders);
ordersRouter.get('/:id', isUserLoggedIn, isUserAdmin, doesOrdersExist, getOneOrders);
ordersRouter.get('/client-orders/:id', isUserLoggedIn, doesOrdersExist, isOrderYours, getOneClientOrder);
ordersRouter.delete('/:id', isUserLoggedIn, isUserAdmin, doesOrdersExist, deleteOneOrders);
ordersRouter.patch('/cancel/:id', isUserLoggedIn, doesOrdersExist, isOrderYours, clientOrderCanceled);
ordersRouter.patch('/delivered/:id', isUserLoggedIn, isUserAdmin, doesOrdersExist, clientOrderdelivered);
ordersRouter.post('/pay/:id', isUserLoggedIn, doesOrdersExist, isOrderYours, isOrderPayed, orderPaymentCreation);

export default ordersRouter;
