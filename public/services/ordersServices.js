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

var _sequelize = _interopRequireDefault(require("sequelize"));

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Orders = _models["default"].Orders,
    User = _models["default"].User;
var Op = _sequelize["default"].Op;

var OrdersServices = /*#__PURE__*/function () {
  function OrdersServices() {
    (0, _classCallCheck2["default"])(this, OrdersServices);
  }

  (0, _createClass2["default"])(OrdersServices, null, [{
    key: "ordersExists",
    value: function () {
      var _ordersExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(attr, val) {
        var orders;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Orders.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                orders = _context.sent;
                return _context.abrupt("return", orders);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function ordersExists(_x, _x2) {
        return _ordersExists.apply(this, arguments);
      }

      return ordersExists;
    }()
  }]);
  return OrdersServices;
}();

(0, _defineProperty2["default"])(OrdersServices, "createOrders", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var due_date, _yield$Orders$create, dataValues;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            due_date = new Date();
            due_date.setMinutes(due_date.getMinutes() + data.due_time);
            _context2.next = 4;
            return Orders.create(_objectSpread(_objectSpread({}, data), {}, {
              status: 'pending',
              due_time: due_date,
              createdAt: new Date(),
              updatedAt: new Date()
            }), {
              fields: ['orderedBy', 'productId', 'product', 'amount', 'currency', 'ordered_quantity', 'payment_options', 'bonus', 'deliveredDistrict', 'deliveredSector', 'deliveredLocation', 'status', 'due_time', 'createdAt', 'updatedAt']
            });

          case 4:
            _yield$Orders$create = _context2.sent;
            dataValues = _yield$Orders$create.dataValues;
            return _context2.abrupt("return", dataValues);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "getAllOrders", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allOrders;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Orders.findAll({
            include: User
          });

        case 2:
          allOrders = _context3.sent;
          return _context3.abrupt("return", allOrders);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(OrdersServices, "getOrders", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allOrders;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Orders.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allOrders = _context4.sent;
            return _context4.abrupt("return", allOrders);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "deleteOrders", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedOrders;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Orders.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedOrders = _context5.sent;
            return _context5.abrupt("return", deletedOrders);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "getAllClientOrders", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId) {
    var orders;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Orders.findAll({
              where: {
                orderedBy: userId,
                status: (0, _defineProperty2["default"])({}, Op.ne, 'canceled')
              }
            });

          case 2:
            orders = _context6.sent;
            return _context6.abrupt("return", orders);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "changeOrderStatus", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(order) {
    var updatedOrders;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log(order, 'lll');
            _context7.next = 3;
            return Orders.update({
              status: order.status,
              due_time: null
            }, {
              where: {
                id: order.id
              }
            });

          case 3:
            updatedOrders = _context7.sent;
            return _context7.abrupt("return", updatedOrders);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x7) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "getOrdersStatusBased", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(status) {
    var allOrders;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Orders.findAll({
              where: {
                status: status
              }
            });

          case 2:
            allOrders = _context8.sent;
            return _context8.abrupt("return", allOrders);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x8) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "getAllPayedClientOrders", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
  var orders;
  return _regenerator["default"].wrap(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Orders.findAll({
            where: {
              status: 'payed'
            }
          });

        case 2:
          orders = _context9.sent;
          return _context9.abrupt("return", orders);

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  }, _callee9);
})));
(0, _defineProperty2["default"])(OrdersServices, "getPayedOrders", /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
    var allOrders;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return Orders.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allOrders = _context10.sent;
            return _context10.abrupt("return", allOrders);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x9) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "addExpiredOrderQuantity", /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id) {
    var totalQuantity;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return Orders.sum('ordered_quantity', {
              where: {
                due_time: (0, _defineProperty2["default"])({}, Op.lt, new Date()),
                productId: id
              }
            });

          case 2:
            totalQuantity = _context11.sent;
            return _context11.abrupt("return", totalQuantity);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x10) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "deleteExpiredOrder", /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id) {
    var deleted;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return Orders.destroy({
              where: {
                due_time: (0, _defineProperty2["default"])({}, Op.lt, new Date()),
                productId: id
              }
            });

          case 2:
            deleted = _context12.sent;
            return _context12.abrupt("return", deleted);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x11) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "getAllExpiredOrder", /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id) {
    var deleted;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return Orders.findAll({
              where: {
                due_time: (0, _defineProperty2["default"])({}, Op.lt, new Date()),
                productId: id
              }
            });

          case 2:
            deleted = _context13.sent;
            return _context13.abrupt("return", deleted);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x12) {
    return _ref12.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersServices, "getPayedClientOrders", /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id) {
    var allOrders;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return Orders.findAll({
              where: {
                id: id,
                status: 'payed'
              }
            });

          case 2:
            allOrders = _context14.sent;
            return _context14.abrupt("return", allOrders);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function (_x13) {
    return _ref13.apply(this, arguments);
  };
}());
var _default = OrdersServices;
exports["default"] = _default;