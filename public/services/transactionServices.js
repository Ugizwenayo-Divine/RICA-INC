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

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Transaction = _models["default"].Transaction,
    Orders = _models["default"].Orders;

var TransactionServices = function TransactionServices() {
  (0, _classCallCheck2["default"])(this, TransactionServices);
};

(0, _defineProperty2["default"])(TransactionServices, "createTransaction", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var _yield$Transaction$cr, dataValues;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Transaction.create(_objectSpread(_objectSpread({}, data), {}, {
              status: 'unverified',
              createdAt: new Date(),
              updatedAt: new Date()
            }), {
              fields: ['transactedBy', 'status', 'order_id', 'type', 'card_no', 'phone_number', 'createdAt', 'updatedAt']
            });

          case 2:
            _yield$Transaction$cr = _context.sent;
            dataValues = _yield$Transaction$cr.dataValues;
            return _context.abrupt("return", dataValues);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TransactionServices, "getAllTransactions", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var allTransaction;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Transaction.findAll({
            where: {
              status: 'verified'
            },
            include: Orders
          });

        case 2:
          allTransaction = _context2.sent;
          return _context2.abrupt("return", allTransaction);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
(0, _defineProperty2["default"])(TransactionServices, "getOneTransaction", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var allTransaction;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Transaction.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allTransaction = _context3.sent;
            return _context3.abrupt("return", allTransaction);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TransactionServices, "getTransaction", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allTransaction;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Transaction.findOne({
              where: {
                id: id
              },
              include: Orders
            });

          case 2:
            allTransaction = _context4.sent;
            return _context4.abrupt("return", allTransaction);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(TransactionServices, "updateStatus", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    var updatedTransaction;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Transaction.update({
              status: 'verified',
              transaction_id: data.transaction_id
            }, {
              where: {
                id: data.tx_ref
              }
            });

          case 2:
            updatedTransaction = _context5.sent;
            return _context5.abrupt("return", updatedTransaction);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x4) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = TransactionServices;
exports["default"] = _default;