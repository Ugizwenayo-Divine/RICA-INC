"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _refundServices = _interopRequireDefault(require("../services/refundServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _ordersServices = _interopRequireDefault(require("../services/ordersServices"));

var getOneRefund = _refundServices["default"].getOneRefund,
    RefundExists = _refundServices["default"].RefundExists;
var errorResponse = _responseHandler["default"].errorResponse;
var norefunds = _customMessages["default"].norefunds;
var badRequest = _statusCode["default"].badRequest;
var getOrders = _ordersServices["default"].getOrders;

var doesRefundExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var refund, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.params.id) {
              _context.next = 7;
              break;
            }

            id = req.params.id;
            _context.next = 4;
            return getOneRefund(id);

          case 4:
            refund = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return RefundExists('description', req.body.description);

          case 9:
            refund = _context.sent;

          case 10:
            if (!refund) {
              _context.next = 13;
              break;
            }

            req.refunds = refund.dataValues;
            return _context.abrupt("return", next());

          case 13:
            return _context.abrupt("return", errorResponse(res, badRequest, norefunds));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doesRefundExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var doesRefundNotExist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var refund;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return RefundExists('refundOrder', req.body.refundOrder);

          case 2:
            refund = _context2.sent;

            if (refund) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", next());

          case 5:
            return _context2.abrupt("return", errorResponse(res, badRequest, 'The refund for that order is already requested'));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function doesRefundNotExist(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var checkRefundOrder = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var order, sessionUser, refundOrder;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sessionUser = req.sessionUser;

            if (!req.body.refundOrder) {
              _context3.next = 8;
              break;
            }

            refundOrder = req.body.refundOrder;
            _context3.next = 5;
            return getOrders(refundOrder);

          case 5:
            order = _context3.sent;
            _context3.next = 9;
            break;

          case 8:
            return _context3.abrupt("return", errorResponse(res, badRequest, 'refundOrder is required'));

          case 9:
            if (!order) {
              _context3.next = 15;
              break;
            }

            if (!(sessionUser.id == order.dataValues.orderedBy)) {
              _context3.next = 14;
              break;
            }

            if (!(order.dataValues.status == 'payed')) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", next());

          case 13:
            return _context3.abrupt("return", errorResponse(res, badRequest, 'The order is not yet payed'));

          case 14:
            return _context3.abrupt("return", errorResponse(res, badRequest, 'The order is not yours'));

          case 15:
            return _context3.abrupt("return", errorResponse(res, badRequest, 'the order does not exists'));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkRefundOrder(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var isRefundYours = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var refund, sessionUser, id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sessionUser = req.sessionUser;
            id = req.params.id;
            _context4.next = 4;
            return getOneRefund(id);

          case 4:
            refund = _context4.sent;

            if (!(refund.dataValues.createdBy == sessionUser.id)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", next());

          case 7:
            return _context4.abrupt("return", errorResponse(res, badRequest, 'This is not your refund'));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function isRefundYours(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  doesRefundExist: doesRefundExist,
  checkRefundOrder: checkRefundOrder,
  isRefundYours: isRefundYours,
  doesRefundNotExist: doesRefundNotExist
};
exports["default"] = _default;