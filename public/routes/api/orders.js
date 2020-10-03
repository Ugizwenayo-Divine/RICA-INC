"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ordersController = _interopRequireDefault(require("../../controllers/ordersController"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _ordersChecker = _interopRequireDefault(require("../../middleware/ordersChecker"));

var _orderValidation = _interopRequireDefault(require("../../middleware/orderValidation"));

var _paymentController = _interopRequireDefault(require("../../controllers/paymentController"));

var addOrders = _ordersController["default"].addOrders,
    getAll = _ordersController["default"].getAll,
    getOneOrders = _ordersController["default"].getOneOrders,
    deleteOneOrders = _ordersController["default"].deleteOneOrders,
    getClientOrders = _ordersController["default"].getClientOrders,
    getOneClientOrder = _ordersController["default"].getOneClientOrder,
    clientOrderCanceled = _ordersController["default"].clientOrderCanceled,
    getAllStatusBased = _ordersController["default"].getAllStatusBased,
    getOnePayedOrders = _ordersController["default"].getOnePayedOrders,
    clientOrderdelivered = _ordersController["default"].clientOrderdelivered,
    checkBonus = _ordersController["default"].checkBonus;
var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var doesOrdersExist = _ordersChecker["default"].doesOrdersExist,
    doesOrderedProductExist = _ordersChecker["default"].doesOrderedProductExist,
    isOrderYours = _ordersChecker["default"].isOrderYours,
    isOrderPayed = _ordersChecker["default"].isOrderPayed;
var orderValidation = _orderValidation["default"].orderValidation;
var orderPaymentCreation = _paymentController["default"].orderPaymentCreation;

var ordersRouter = _express["default"].Router();

ordersRouter.post('/add', isUserLoggedIn, doesOrderedProductExist, orderValidation, addOrders);
ordersRouter.get('/', isUserLoggedIn, isUserAdmin, getAll);
ordersRouter.get('/allowed-bonus', isUserLoggedIn, checkBonus);
ordersRouter.get('/status-based/', isUserLoggedIn, isUserAdmin, getAllStatusBased);
ordersRouter.get('/client-orders', isUserLoggedIn, getClientOrders);
ordersRouter.get('/payed-orders', isUserLoggedIn, isUserAdmin, getOnePayedOrders);
ordersRouter.get('/:id', isUserLoggedIn, isUserAdmin, doesOrdersExist, getOneOrders);
ordersRouter.get('/client-orders/:id', isUserLoggedIn, doesOrdersExist, isOrderYours, getOneClientOrder);
ordersRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesOrdersExist, deleteOneOrders);
ordersRouter.patch('/cancel/:id', isUserLoggedIn, doesOrdersExist, isOrderYours, clientOrderCanceled);
ordersRouter.patch('/delivered/:id', isUserLoggedIn, isUserAdmin, doesOrdersExist, clientOrderdelivered);
ordersRouter.post('/pay/:id', isUserLoggedIn, doesOrdersExist, isOrderYours, isOrderPayed, orderPaymentCreation);
var _default = ordersRouter;
exports["default"] = _default;