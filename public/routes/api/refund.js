"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _refundController = _interopRequireDefault(require("../../controllers/refundController"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _refundValidation = _interopRequireDefault(require("../../middleware/refundValidation"));

var _refundChecker = _interopRequireDefault(require("../../middleware/refundChecker"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var createRefundValidation = _refundValidation["default"].createRefundValidation,
    updateRefundValidation = _refundValidation["default"].updateRefundValidation,
    updateRefundStatusValidation = _refundValidation["default"].updateRefundStatusValidation;
var doesRefundExist = _refundChecker["default"].doesRefundExist,
    isRefundYours = _refundChecker["default"].isRefundYours,
    checkRefundOrder = _refundChecker["default"].checkRefundOrder,
    doesRefundNotExist = _refundChecker["default"].doesRefundNotExist;

var refundRouter = _express["default"].Router();

refundRouter.post('/add', isUserLoggedIn, createRefundValidation, checkRefundOrder, doesRefundNotExist, _refundController["default"].addRefund);
refundRouter.get('/', isUserLoggedIn, isUserAdmin, _refundController["default"].getAll);
refundRouter.get('/customer', isUserLoggedIn, _refundController["default"].getCustomerRefunds);
refundRouter.get('/customer/:id', isUserLoggedIn, doesRefundExist, isRefundYours, _refundController["default"].getOneRefund);
refundRouter.get('/:id', isUserLoggedIn, isUserAdmin, doesRefundExist, _refundController["default"].getOneRefund);
refundRouter["delete"]('/:id', isUserLoggedIn, doesRefundExist, isRefundYours, _refundController["default"]["delete"]);
refundRouter.patch('/:id', isUserLoggedIn, doesRefundExist, isRefundYours, updateRefundValidation, _refundController["default"].RefundUpdation);
refundRouter.patch('/status/:id', isUserLoggedIn, isUserAdmin, doesRefundExist, updateRefundStatusValidation, _refundController["default"].StatusUpdation);
var _default = refundRouter;
exports["default"] = _default;