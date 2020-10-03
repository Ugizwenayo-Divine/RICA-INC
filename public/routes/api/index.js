"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("./authentication"));

var _news = _interopRequireDefault(require("./news"));

var _product = _interopRequireDefault(require("./product"));

var _advertisement = _interopRequireDefault(require("./advertisement"));

var _feedback = _interopRequireDefault(require("./feedback"));

var _announcement = _interopRequireDefault(require("./announcement"));

var _orders = _interopRequireDefault(require("./orders"));

var _payment = _interopRequireDefault(require("./payment"));

var _history = _interopRequireDefault(require("./history"));

var _refund = _interopRequireDefault(require("./refund"));

var _study = _interopRequireDefault(require("./study"));

var _design = _interopRequireDefault(require("./design"));

var _location = _interopRequireDefault(require("./location"));

var _bonus = _interopRequireDefault(require("./bonus"));

var apiRouter = _express["default"].Router();

apiRouter.use('/auth', _authentication["default"]);
apiRouter.use('/news', _news["default"]);
apiRouter.use('/product', _product["default"]);
apiRouter.use('/advertisement', _advertisement["default"]);
apiRouter.use('/feedback', _feedback["default"]);
apiRouter.use('/announcement', _announcement["default"]);
apiRouter.use('/orders', _orders["default"]);
apiRouter.use('/payment', _payment["default"]);
apiRouter.use('/history', _history["default"]);
apiRouter.use('/refund', _refund["default"]);
apiRouter.use('/study', _study["default"]);
apiRouter.use('/design', _design["default"]);
apiRouter.use('/location', _location["default"]);
apiRouter.use('/bonus', _bonus["default"]);
var _default = apiRouter;
exports["default"] = _default;