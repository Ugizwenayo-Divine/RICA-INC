"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ordersServices = _interopRequireDefault(require("../services/ordersServices"));

var _historyServices = _interopRequireDefault(require("../services/historyServices"));

var changeOrderStatus = _ordersServices["default"].changeOrderStatus,
    addExpiredOrderQuantity = _ordersServices["default"].addExpiredOrderQuantity,
    deleteExpiredOrder = _ordersServices["default"].deleteExpiredOrder,
    getAllExpiredOrder = _ordersServices["default"].getAllExpiredOrder,
    getAllClientOrders = _ordersServices["default"].getAllClientOrders;
var createHistory = _historyServices["default"].createHistory;

var clientOrderPayed = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = {
              id: id,
              status: 'payed'
            };
            _context.next = 4;
            return changeOrderStatus(data);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", error);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function clientOrderPayed(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updateForExpiredOrder = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var totalQuantity, expiredOrders, deleted;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return addExpiredOrderQuantity(id);

          case 3:
            totalQuantity = _context3.sent;
            _context3.next = 6;
            return getAllExpiredOrder(id);

          case 6:
            expiredOrders = _context3.sent;
            expiredOrders.forEach( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(order) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return createHistory(order.dataValues);

                      case 3:
                        _context2.next = 8;
                        break;

                      case 5:
                        _context2.prev = 5;
                        _context2.t0 = _context2["catch"](0);
                        return _context2.abrupt("return", _context2.t0);

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 5]]);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());
            _context3.next = 10;
            return deleteExpiredOrder(id);

          case 10:
            deleted = _context3.sent;
            return _context3.abrupt("return", totalQuantity);

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0.message);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function updateForExpiredOrder(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var allowDiscount = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(data) {
    var orders, sum;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(data.id);
            _context6.next = 3;
            return getAllClientOrders(data.id);

          case 3:
            orders = _context6.sent;
            sum = 0;
            orders.map(function (order) {
              if (order.status === 'payed' && order.bonus === null) {
                sum = sum + order.amount;
              }
            });
            console.log(sum, data.amount);

            if (!(data.amount >= 1000000)) {
              _context6.next = 11;
              break;
            }

            orders.map( /*#__PURE__*/function () {
              var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(order) {
                var _data;

                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(order.status === 'payed')) {
                          _context4.next = 4;
                          break;
                        }

                        _data = {
                          id: order.id,
                          status: 'discounted'
                        };
                        _context4.next = 4;
                        return changeOrderStatus(_data);

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x5) {
                return _ref5.apply(this, arguments);
              };
            }());
            console.log('allowed discount');
            return _context6.abrupt("return", true);

          case 11:
            if (!(sum + data.amount >= 2000000)) {
              _context6.next = 15;
              break;
            }

            orders.map( /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(order) {
                var _data2;

                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!(order.status === 'payed')) {
                          _context5.next = 4;
                          break;
                        }

                        _data2 = {
                          id: order.id,
                          status: 'discounted'
                        };
                        _context5.next = 4;
                        return changeOrderStatus(_data2);

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x6) {
                return _ref6.apply(this, arguments);
              };
            }());
            console.log('allowed discount');
            return _context6.abrupt("return", true);

          case 15:
            console.log('not allowed discount');
            return _context6.abrupt("return", false);

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function allowDiscount(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  clientOrderPayed: clientOrderPayed,
  updateForExpiredOrder: updateForExpiredOrder,
  allowDiscount: allowDiscount
};
exports["default"] = _default;