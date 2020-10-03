"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _refundServices = _interopRequireDefault(require("../services/refundServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var error = _customMessages["default"].error,
    allRefunds = _customMessages["default"].allRefunds,
    refunds = _customMessages["default"].refunds,
    deleted = _customMessages["default"].deleted;
var badRequest = _statusCode["default"].badRequest,
    ok = _statusCode["default"].ok;

var RefundController = /*#__PURE__*/function () {
  function RefundController() {
    (0, _classCallCheck2["default"])(this, RefundController);
  }

  (0, _createClass2["default"])(RefundController, null, [{
    key: "addRefund",
    value: function () {
      var _addRefund = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var sessionUser, id, _req$body, refundOrder, description, status, datas;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionUser = req.sessionUser;
                id = sessionUser.id;
                _context.prev = 2;
                _req$body = req.body, refundOrder = _req$body.refundOrder, description = _req$body.description;
                status = 'pending';
                _context.next = 7;
                return _refundServices["default"].saveRefund({
                  createdBy: id,
                  refundOrder: refundOrder,
                  description: description,
                  status: status
                });

              case 7:
                datas = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Refund Successfully Added',
                  data: datas
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  message: _context.t0.message
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function addRefund(_x, _x2) {
        return _addRefund.apply(this, arguments);
      }

      return addRefund;
    }()
  }]);
  return RefundController;
}();

(0, _defineProperty2["default"])(RefundController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _refunds;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _refundServices["default"].getAllRefunds();

          case 3:
            _refunds = _context2.sent;
            return _context2.abrupt("return", successResponse(res, ok, allRefunds, null, _refunds));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundController, "getOneRefund", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneRefund;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _refundServices["default"].getOneRefund(id);

          case 4:
            oneRefund = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, refunds, null, oneRefund));

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
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundController, "delete", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _refundServices["default"].deleteRefund(id);

          case 4:
            return _context4.abrupt("return", successResponse(res, ok, deleted, null, null));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", errorResponse(res, badRequest, error));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundController, "RefundUpdation", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _refunds2, newData;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _refunds2 = req.refunds;
            newData = {
              id: id,
              description: req.body.description || _refunds2.description
            };
            _context5.next = 6;
            return _refundServices["default"].updateRefund(newData);

          case 6:
            return _context5.abrupt("return", successResponse(res, ok, 'updated', null, null));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, error));

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function (_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundController, "StatusUpdation", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, _refunds3, newData;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _refunds3 = req.refunds;
            newData = {
              id: id,
              status: req.body.status || _refunds3.status
            };
            _context6.next = 6;
            return _refundServices["default"].updateRefundStatus(newData);

          case 6:
            return _context6.abrupt("return", successResponse(res, ok, 'updated', null, null));

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", errorResponse(res, badRequest, error));

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));

  return function (_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundController, "getCustomerRefunds", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var sessionUser, _refunds4;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sessionUser = req.sessionUser;
            _context7.prev = 1;
            _context7.next = 4;
            return _refundServices["default"].getAllCustomerRefunds(sessionUser.id);

          case 4:
            _refunds4 = _context7.sent;
            return _context7.abrupt("return", successResponse(res, ok, allRefunds, null, _refunds4));

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            return _context7.abrupt("return", errorResponse(res, badRequest, _context7.t0));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));

  return function (_x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}());
var _default = RefundController;
exports["default"] = _default;