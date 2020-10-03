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

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Refund = _models["default"].Refund;

var RefundService = /*#__PURE__*/function () {
  function RefundService() {
    (0, _classCallCheck2["default"])(this, RefundService);
  }

  (0, _createClass2["default"])(RefundService, null, [{
    key: "saveRefund",
    value: function () {
      var _saveRefund = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(refund) {
        var acceptedRefund;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Refund.create(_objectSpread(_objectSpread({}, refund), {}, {
                  createdAt: new Date(),
                  updatedAt: new Date()
                }), {
                  fields: ['createdBy', 'refundOrder', 'description', 'status']
                });

              case 2:
                acceptedRefund = _context.sent;
                return _context.abrupt("return", acceptedRefund);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveRefund(_x) {
        return _saveRefund.apply(this, arguments);
      }

      return saveRefund;
    }()
  }, {
    key: "RefundExists",
    value: function () {
      var _RefundExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(attr, val) {
        var refund;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Refund.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                refund = _context2.sent;
                return _context2.abrupt("return", refund);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function RefundExists(_x2, _x3) {
        return _RefundExists.apply(this, arguments);
      }

      return RefundExists;
    }()
  }]);
  return RefundService;
}();

(0, _defineProperty2["default"])(RefundService, "getAllRefunds", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allRefunds;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Refund.findAll();

        case 2:
          allRefunds = _context3.sent;
          return _context3.abrupt("return", allRefunds);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(RefundService, "getOneRefund", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allRefunds;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Refund.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allRefunds = _context4.sent;
            return _context4.abrupt("return", allRefunds);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundService, "deleteRefund", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedRefund;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Refund.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedRefund = _context5.sent;
            return _context5.abrupt("return", deletedRefund);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundService, "updateRefund", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(newData) {
    var updatedRefund;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Refund.update({
              description: newData.description
            }, {
              where: {
                id: newData.id
              }
            });

          case 2:
            updatedRefund = _context6.sent;
            return _context6.abrupt("return", updatedRefund);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundService, "updateRefundStatus", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(newData) {
    var updatedRefundStatus;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Refund.update({
              status: newData.status
            }, {
              where: {
                id: newData.id
              }
            });

          case 2:
            updatedRefundStatus = _context7.sent;
            return _context7.abrupt("return", updatedRefundStatus);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x7) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(RefundService, "getAllCustomerRefunds", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
    var allRefunds;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Refund.findAll({
              where: {
                createdBy: id
              }
            });

          case 2:
            allRefunds = _context8.sent;
            return _context8.abrupt("return", allRefunds);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x8) {
    return _ref6.apply(this, arguments);
  };
}());
var _default = RefundService;
exports["default"] = _default;