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

var _sequelize = _interopRequireDefault(require("sequelize"));

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var History = _models["default"].History;
var Op = _sequelize["default"].Op;

var HistoryServices = function HistoryServices() {
  (0, _classCallCheck2["default"])(this, HistoryServices);
};

(0, _defineProperty2["default"])(HistoryServices, "createHistory", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var _yield$History$create, dataValues;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return History.create(_objectSpread({}, data), {
              fields: ['orderedBy', 'productId', 'amount', 'currency', 'payment_options', 'ordered_quantity', 'due_time', 'status', 'createdAt', 'updatedAt']
            });

          case 2:
            _yield$History$create = _context.sent;
            dataValues = _yield$History$create.dataValues;
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
(0, _defineProperty2["default"])(HistoryServices, "getAllHistory", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var allHistory;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return History.findAll();

        case 2:
          allHistory = _context2.sent;
          return _context2.abrupt("return", allHistory);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
(0, _defineProperty2["default"])(HistoryServices, "getHistory", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var allHistory;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return History.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allHistory = _context3.sent;
            return _context3.abrupt("return", allHistory);

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
(0, _defineProperty2["default"])(HistoryServices, "getAllHistoryByCustomer", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(customerId) {
    var allHistory;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return History.findAll({
              where: {
                orderedBy: customerId
              }
            });

          case 2:
            allHistory = _context4.sent;
            return _context4.abrupt("return", allHistory);

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
(0, _defineProperty2["default"])(HistoryServices, "getHistoryStatusBased", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(status) {
    var allHistory;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return History.findAll({
              where: {
                status: status
              }
            });

          case 2:
            allHistory = _context5.sent;
            return _context5.abrupt("return", allHistory);

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
var _default = HistoryServices;
exports["default"] = _default;