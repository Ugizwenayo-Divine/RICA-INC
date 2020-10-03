"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ordersServices = _interopRequireDefault(require("../services/ordersServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _productServices = _interopRequireDefault(require("../services/productServices"));

var _orderHelper = _interopRequireDefault(require("../helpers/orderHelper"));

var getOrders = _ordersServices["default"].getOrders,
    ordersExists = _ordersServices["default"].ordersExists,
    getPayedOrders = _ordersServices["default"].getPayedOrders;
var errorResponse = _responseHandler["default"].errorResponse;
var badRequest = _statusCode["default"].badRequest;
var noproducts = _customMessages["default"].noproducts;
var productExists = _productServices["default"].productExists,
    updateProduct = _productServices["default"].updateProduct;
var updateForExpiredOrder = _orderHelper["default"].updateForExpiredOrder;

var doesOrdersExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var orders, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return getOrders(id);

          case 3:
            orders = _context.sent;

            if (!orders) {
              _context.next = 7;
              break;
            }

            req.orders = orders.dataValues;
            return _context.abrupt("return", next());

          case 7:
            return _context.abrupt("return", errorResponse(res, badRequest, 'That order does not exist'));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doesOrdersExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var doesOrderedProductExist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var product, ordered, quantity, _product, dataValues;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return productExists('id', req.body.productId);

          case 2:
            product = _context2.sent;

            if (!product) {
              _context2.next = 20;
              break;
            }

            _context2.next = 6;
            return updateForExpiredOrder(req.body.productId);

          case 6:
            quantity = _context2.sent;

            if (!(quantity > 0)) {
              _context2.next = 11;
              break;
            }

            product.dataValues.quantity = product.dataValues.quantity + quantity;
            _context2.next = 11;
            return updateProduct(product.dataValues);

          case 11:
            _product = product, dataValues = _product.dataValues;
            _context2.next = 14;
            return ordersExists('productId', dataValues.id);

          case 14:
            ordered = _context2.sent;

            if (!(ordered && dataValues.quantity == 0 || dataValues.status == 'sold')) {
              _context2.next = 17;
              break;
            }

            return _context2.abrupt("return", errorResponse(res, badRequest, 'The product is already ordered'));

          case 17:
            if (!(dataValues.quantity < req.body.quantity)) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", errorResponse(res, badRequest, 'The requested quantity is more than what we have'));

          case 19:
            return _context2.abrupt("return", next());

          case 20:
            return _context2.abrupt("return", errorResponse(res, badRequest, noproducts));

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function doesOrderedProductExist(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var isOrderYours = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var sessionUser, id, order;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sessionUser = req.sessionUser;
            id = req.params.id;
            _context3.next = 4;
            return getOrders(id);

          case 4:
            order = _context3.sent;

            if (!(order.orderedBy == sessionUser.id)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", next());

          case 7:
            return _context3.abrupt("return", errorResponse(res, badRequest, 'This is not your order'));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isOrderYours(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var isOrderPayed = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, order;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return getPayedOrders(id);

          case 3:
            order = _context4.sent;

            if (!(order.status == 'pending')) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", next());

          case 6:
            if (!(order.status == 'canceled')) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", errorResponse(res, badRequest, 'This is order is canceled'));

          case 8:
            return _context4.abrupt("return", errorResponse(res, badRequest, 'This is order is payed or delivered'));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function isOrderPayed(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  doesOrdersExist: doesOrdersExist,
  doesOrderedProductExist: doesOrderedProductExist,
  isOrderYours: isOrderYours,
  isOrderPayed: isOrderPayed
};
exports["default"] = _default;