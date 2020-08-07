import express from 'express';
import authentication from '../../middleware/authentication';
import Payment from '../../controllers/paymentController';

const {
  isUserLoggedIn,
  isUserAdmin,
} = authentication;
const {
  paymentVerification,
  getVerifiedTransactions,
} = Payment;

const paymentRouter = express.Router();

paymentRouter.patch('/verify/:transaction_id', isUserLoggedIn, paymentVerification);
paymentRouter.get('/transactions', isUserLoggedIn, isUserAdmin, getVerifiedTransactions);

export default paymentRouter;
