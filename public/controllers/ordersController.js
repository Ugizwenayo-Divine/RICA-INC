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

var _ordersServices = _interopRequireDefault(require("../services/ordersServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _productServices = _interopRequireDefault(require("../services/productServices"));

var _historyServices = _interopRequireDefault(require("../services/historyServices"));

var _smsNotification = _interopRequireDefault(require("../helpers/smsNotification"));

var _authServices = _interopRequireDefault(require("../services/authServices"));

var _orderHelper = _interopRequireDefault(require("../helpers/orderHelper"));

var createOrders = _ordersServices["default"].createOrders,
    getAllOrders = _ordersServices["default"].getAllOrders,
    getOrders = _ordersServices["default"].getOrders,
    deleteOrders = _ordersServices["default"].deleteOrders,
    getAllClientOrders = _ordersServices["default"].getAllClientOrders,
    changeOrderStatus = _ordersServices["default"].changeOrderStatus,
    getOrdersStatusBased = _ordersServices["default"].getOrdersStatusBased,
    getAllPayedClientOrders = _ordersServices["default"].getAllPayedClientOrders;
var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var error = _customMessages["default"].error,
    successCreation = _customMessages["default"].successCreation,
    allOrders = _customMessages["default"].allOrders,
    orders = _customMessages["default"].orders,
    deleted = _customMessages["default"].deleted;
var badRequest = _statusCode["default"].badRequest,
    created = _statusCode["default"].created,
    ok = _statusCode["default"].ok;
var getProduct = _productServices["default"].getProduct,
    updateProduct = _productServices["default"].updateProduct;
var createHistory = _historyServices["default"].createHistory;
var sendSMS = _smsNotification["default"].sendSMS;
var findAllUsers = _authServices["default"].findAllUsers;
var allowDiscount = _orderHelper["default"].allowDiscount;

var OrdersController = function OrdersController() {
  (0, _classCallCheck2["default"])(this, OrdersController);
};

(0, _defineProperty2["default"])(OrdersController, "addOrders", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var sessionUser, id, _req$body, productId, quantity, payment_options, deliveredDistrict, deliveredLocation, deliveredSector, product, amount, allowedBonus, data, result, users;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sessionUser = req.sessionUser;
            id = sessionUser.id;
            _req$body = req.body, productId = _req$body.productId, quantity = _req$body.quantity, payment_options = _req$body.payment_options, deliveredDistrict = _req$body.deliveredDistrict, deliveredLocation = _req$body.deliveredLocation, deliveredSector = _req$body.deliveredSector;
            _context2.prev = 3;
            _context2.next = 6;
            return getProduct(productId);

          case 6:
            product = _context2.sent;
            product.dataValues.quantity = product.dataValues.quantity - quantity;
            _context2.next = 10;
            return updateProduct(product.dataValues);

          case 10:
            amount = product.dataValues.price.split(' ');
            _context2.next = 13;
            return allowDiscount({
              id: id,
              amount: amount[0] * quantity
            });

          case 13:
            allowedBonus = _context2.sent;
            data = {
              orderedBy: id,
              productId: productId,
              product: product.dataValues.name,
              amount: amount[0] * quantity + parseInt(deliveredDistrict.price),
              currency: amount[1],
              ordered_quantity: quantity,
              due_time: product.dataValues.due_time * 60,
              payment_options: payment_options,
              deliveredDistrict: deliveredDistrict.district,
              deliveredSector: deliveredSector,
              deliveredLocation: deliveredLocation,
              bonus: allowedBonus ? req.body.bonus : null
            };
            _context2.next = 17;
            return createOrders(data);

          case 17:
            result = _context2.sent;
            _context2.next = 20;
            return findAllUsers();

          case 20:
            users = _context2.sent;

            if (!result) {
              _context2.next = 26;
              break;
            }

            users.map( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(user.type === 'admin')) {
                          _context.next = 6;
                          break;
                        }

                        _context.next = 3;
                        return sendSMS(user.phoneNumber, "The client with ".concat(sessionUser.email, " orders the ").concat(quantity, " units of ").concat(product.dataValues.name));

                      case 3:
                        _context.t0 = _context.sent;
                        _context.next = 7;
                        break;

                      case 6:
                        _context.t0 = null;

                      case 7:
                        return _context.abrupt("return", _context.t0);

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.next = 25;
            return sendSMS(sessionUser.phoneNumber, "You have ordered ".concat(quantity, " units of ").concat(product.dataValues.name, " from RICA\n        The product will be delivered within 3 days"));

          case 25:
            return _context2.abrupt("return", successResponse(res, created, successCreation, null, result));

          case 26:
            _context2.next = 32;
            break;

          case 28:
            _context2.prev = 28;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            return _context2.abrupt("return", errorResponse(res, badRequest, error));

          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 28]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "getAll", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _orders;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getAllOrders();

          case 3:
            _orders = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, allOrders, null, _orders));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "getAllStatusBased", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var status, _orders2;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            status = req.query.status;
            _context4.prev = 1;
            _context4.next = 4;
            return getOrdersStatusBased(status);

          case 4:
            _orders2 = _context4.sent;
            return _context4.abrupt("return", successResponse(res, ok, allOrders, null, _orders2));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", errorResponse(res, badRequest, _context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "getOneOrders", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, oneOrders;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return getOrders(id);

          case 4:
            oneOrders = _context5.sent;
            return _context5.abrupt("return", successResponse(res, ok, orders, null, oneOrders));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, _context5.t0));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "deleteOneOrders", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, order, history;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return getOrders(id);

          case 4:
            order = _context6.sent;
            _context6.next = 7;
            return createHistory(order.dataValues);

          case 7:
            history = _context6.sent;
            _context6.next = 10;
            return deleteOrders(id);

          case 10:
            return _context6.abrupt("return", successResponse(res, ok, deleted, null, null));

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", errorResponse(res, badRequest, error));

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 13]]);
  }));

  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "getOneClientOrder", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, oneOrders;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return getOrders(id);

          case 4:
            oneOrders = _context7.sent;
            return _context7.abrupt("return", successResponse(res, ok, orders, null, oneOrders));

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", errorResponse(res, badRequest, error));

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "getClientOrders", /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var sessionUser, _allOrders;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            sessionUser = req.sessionUser;
            _context8.next = 4;
            return getAllClientOrders(sessionUser.id);

          case 4:
            _allOrders = _context8.sent;
            return _context8.abrupt("return", successResponse(res, ok, orders, null, _allOrders));

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", errorResponse(res, badRequest, error));

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));

  return function (_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "clientOrderCanceled", /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id, data, order, product;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.params.id;
            data = {
              id: id,
              status: 'canceled'
            };
            _context9.next = 5;
            return getOrders(id);

          case 5:
            order = _context9.sent;

            if (!(order.dataValues.status == 'pending')) {
              _context9.next = 16;
              break;
            }

            _context9.next = 9;
            return getProduct(order.dataValues.productId);

          case 9:
            product = _context9.sent;
            product.dataValues.quantity = product.dataValues.quantity + order.dataValues.ordered_quantity;
            _context9.next = 13;
            return updateProduct(product.dataValues);

          case 13:
            _context9.next = 15;
            return changeOrderStatus(data);

          case 15:
            return _context9.abrupt("return", successResponse(res, ok, 'the order is canceled', null, null));

          case 16:
            return _context9.abrupt("return", errorResponse(res, badRequest, 'You are not allowed to cancel this order'));

          case 19:
            _context9.prev = 19;
            _context9.t0 = _context9["catch"](0);
            return _context9.abrupt("return", errorResponse(res, badRequest, error));

          case 22:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 19]]);
  }));

  return function (_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "getOnePayedOrders", /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var oneOrders;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return getAllPayedClientOrders();

          case 3:
            oneOrders = _context10.sent;
            return _context10.abrupt("return", successResponse(res, ok, orders, null, oneOrders));

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return", errorResponse(res, badRequest, _context10.t0));

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));

  return function (_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "clientOrderdelivered", /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var id, data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            id = req.params.id;
            data = {
              id: id,
              status: 'delivered'
            };
            _context11.next = 5;
            return changeOrderStatus(data);

          case 5:
            return _context11.abrupt("return", successResponse(res, ok, 'the order is delivered', null, null));

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
            return _context11.abrupt("return", errorResponse(res, badRequest, error));

          case 11:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 8]]);
  }));

  return function (_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrdersController, "checkBonus", /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var sessionUser, id, allowedBonus;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            sessionUser = req.sessionUser;
            id = sessionUser.id;
            _context12.prev = 2;
            _context12.next = 5;
            return allowDiscount({
              id: id,
              amount: 0
            });

          case 5:
            allowedBonus = _context12.sent;

            if (!allowedBonus) {
              _context12.next = 8;
              break;
            }

            return _context12.abrupt("return", successResponse(res, ok, 'Allowed bonus', null, true));

          case 8:
            return _context12.abrupt("return", successResponse(res, ok, 'Not allowed bonus', null, false));

          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](2);
            return _context12.abrupt("return", errorResponse(res, badRequest, err.message));

          case 14:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 11]]);
  }));

  return function (_x22, _x23) {
    return _ref12.apply(this, arguments);
  };
}());
var _default = OrdersController;
exports["default"] = _default;