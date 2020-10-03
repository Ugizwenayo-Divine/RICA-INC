"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _productServices = _interopRequireDefault(require("../services/productServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var getProduct = _productServices["default"].getProduct,
    productExists = _productServices["default"].productExists;
var errorResponse = _responseHandler["default"].errorResponse;
var noproducts = _customMessages["default"].noproducts,
    productExist = _customMessages["default"].productExist;
var badRequest = _statusCode["default"].badRequest;

var doesProductExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var product, id;
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
            return getProduct(id);

          case 4:
            product = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return productExists('name', req.body.name);

          case 9:
            product = _context.sent;

          case 10:
            if (!product) {
              _context.next = 13;
              break;
            }

            req.products = product.dataValues;
            return _context.abrupt("return", next());

          case 13:
            return _context.abrupt("return", errorResponse(res, badRequest, noproducts));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doesProductExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var doesProductNameExist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var product, name;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = req.body.name;
            _context2.next = 3;
            return productExists('name', name);

          case 3:
            product = _context2.sent;

            if (!product) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", errorResponse(res, badRequest, productExist));

          case 6:
            return _context2.abrupt("return", next());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function doesProductNameExist(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  doesProductExist: doesProductExist,
  doesProductNameExist: doesProductNameExist
};
exports["default"] = _default;