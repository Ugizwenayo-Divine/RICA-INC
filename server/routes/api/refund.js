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

const { doesRefundExist } = refundChecker;
const refundRouter = express.Router();

refundRouter.post('/add', isUserLoggedIn, createRefundValidation, RefundController.addRefund);
refundRouter.get('/', RefundController.getAll);
refundRouter.get('/:id', doesRefundExist, RefundController.getOneRefund);
refundRouter.delete('/:id', isUserLoggedIn, doesRefundExist, RefundController.delete);
refundRouter.patch(
  '/:id',
  isUserLoggedIn,
  doesRefundExist,
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
