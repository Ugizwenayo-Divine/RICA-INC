"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _paymentController = _interopRequireDefault(require("../../controllers/paymentController"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var verification = _paymentController["default"].verification,
    getVerifiedTransactions = _paymentController["default"].getVerifiedTransactions,
    getPayment = _paymentController["default"].getPayment;

var paymentRouter = _express["default"].Router();

paymentRouter.post('/verify/transaction', verification); // paymentRouter.patch('/verify/:transaction_id', isUserLoggedIn, paymentVerification);
// paymentRouter.patch('/verify/transaction', isUserLoggedIn, paymentVerification);

paymentRouter.get('/transactions', isUserLoggedIn, isUserAdmin, getVerifiedTransactions);
paymentRouter.get('/payment', getPayment);
var _default = paymentRouter;
exports["default"] = _default;