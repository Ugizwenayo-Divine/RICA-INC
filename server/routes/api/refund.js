import express from 'express';
import RefundController from '../../controllers/refundController';
import authentication from '../../middleware/authentication';
import refundValidation from '../../middleware/refundValidation';
import refundChecker from '../../middleware/refundChecker';

const { isUserLoggedIn, isUserAdmin } = authentication;
const {
  createRefundValidation,
  updateRefundValidation,
  updateRefundStatusValidation,
} = refundValidation;

const { doesRefundExist, isRefundYours, checkRefundOrder, doesRefundNotExist } = refundChecker;
const refundRouter = express.Router();

refundRouter.post('/add', isUserLoggedIn, createRefundValidation, checkRefundOrder,doesRefundNotExist,  RefundController.addRefund);
refundRouter.get('/', isUserLoggedIn, isUserAdmin, RefundController.getAll);
refundRouter.get('/customer', isUserLoggedIn, RefundController.getCustomerRefunds);
refundRouter.get('/customer/:id', isUserLoggedIn, doesRefundExist, isRefundYours, RefundController.getOneRefund);
refundRouter.get('/:id', isUserLoggedIn, isUserAdmin, doesRefundExist, RefundController.getOneRefund);
refundRouter.delete('/:id', isUserLoggedIn, doesRefundExist, isRefundYours, RefundController.delete);
refundRouter.patch(
  '/:id',
  isUserLoggedIn,
  doesRefundExist,
  isRefundYours,
  updateRefundValidation,
  RefundController.RefundUpdation
);
refundRouter.patch(
  '/status/:id',
  isUserLoggedIn,
  isUserAdmin,
  doesRefundExist,
  updateRefundStatusValidation,
  RefundController.StatusUpdation
);

export default refundRouter;
