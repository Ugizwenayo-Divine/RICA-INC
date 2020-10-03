"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _historyController = _interopRequireDefault(require("../../controllers/historyController"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var getAll = _historyController["default"].getAll,
    getAllStatusBased = _historyController["default"].getAllStatusBased,
    getOneHistoryOrders = _historyController["default"].getOneHistoryOrders,
    getCustomerHistoryOrders = _historyController["default"].getCustomerHistoryOrders;

var historyRouter = _express["default"].Router();

historyRouter.get('/', isUserLoggedIn, isUserAdmin, getAll);
historyRouter.get('/status/', isUserLoggedIn, isUserAdmin, getAllStatusBased);
historyRouter.get('/customer/:id', isUserLoggedIn, isUserAdmin, getCustomerHistoryOrders);
historyRouter.get('/:id', isUserLoggedIn, isUserAdmin, getOneHistoryOrders);
var _default = historyRouter;
exports["default"] = _default;