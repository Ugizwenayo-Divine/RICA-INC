"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _historyServices = _interopRequireDefault(require("../services/historyServices"));

var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var allOrders = _customMessages["default"].allOrders,
    orders = _customMessages["default"].orders;
var badRequest = _statusCode["default"].badRequest,
    ok = _statusCode["default"].ok;
var getAllHistory = _historyServices["default"].getAllHistory,
    getAllHistoryByCustomer = _historyServices["default"].getAllHistoryByCustomer,
    getHistoryStatusBased = _historyServices["default"].getHistoryStatusBased,
    getHistory = _historyServices["default"].getHistory;

var HistoryController = function HistoryController() {
  (0, _classCallCheck2["default"])(this, HistoryController);
};

(0, _defineProperty2["default"])(HistoryController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _orders;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getAllHistory();

          case 3:
            _orders = _context.sent;
            return _context.abrupt("return", successResponse(res, ok, 'the orders from history', null, _orders));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", errorResponse(res, badRequest, _context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(HistoryController, "getAllStatusBased", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var status, _orders2;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            status = req.query.status;
            _context2.prev = 1;
            _context2.next = 4;
            return getHistoryStatusBased(status);

          case 4:
            _orders2 = _context2.sent;
            return _context2.abrupt("return", successResponse(res, ok, 'the orders from history', null, _orders2));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(HistoryController, "getOneHistoryOrders", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneOrders;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return getHistory(id);

          case 4:
            oneOrders = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, 'the order from history', null, oneOrders));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(HistoryController, "getCustomerHistoryOrders", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, oneOrders;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return getAllHistoryByCustomer(id);

          case 4:
            oneOrders = _context4.sent;
            return _context4.abrupt("return", successResponse(res, ok, 'the orders of this customers from history', null, oneOrders));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", errorResponse(res, badRequest, _context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = HistoryController;
exports["default"] = _default;