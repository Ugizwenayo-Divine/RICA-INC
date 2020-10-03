"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validation = require("../helpers/validation");

var createProductValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateProducts, error;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateProducts = (0, _validation.validateProducts)(req.body), error = _validateProducts.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createProductValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var searchProductName = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var name, data, _validateSearchName, error;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = req.query.name;
            data = {
              name: name
            };
            _validateSearchName = (0, _validation.validateSearchName)(data), error = _validateSearchName.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function searchProductName(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var searchProductCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var category, data, _validateSearchCatego, error;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            category = req.query.category;
            data = {
              category: category
            };
            _validateSearchCatego = (0, _validation.validateSearchCategory)(data), error = _validateSearchCatego.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function searchProductCategory(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var updateProductValidation = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var products, keys, name, category, price, brand, quantity, due_time, newPrice, data, _validateProducts2, error;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            products = req.products;
            keys = Object.keys(req.body);
            name = keys.find(function (key) {
              return key == 'name';
            });
            category = keys.find(function (key) {
              return key == 'category';
            });
            price = keys.find(function (key) {
              return key == 'price';
            });
            brand = keys.find(function (key) {
              return key == 'brand';
            });
            quantity = keys.find(function (key) {
              return key == 'quantity';
            });
            due_time = keys.find(function (key) {
              return key == 'due_time';
            });
            newPrice = products.price.split(' ');
            data = {
              name: name ? req.body.name : products.name,
              category: category ? req.body.category : products.category,
              price: price ? req.body.price : newPrice[0],
              brand: brand ? req.body.brand : products.brand,
              quantity: quantity ? req.body.quantity : products.quantity.toString(),
              due_time: due_time ? req.body.due_time : products.due_time.toString()
            };
            _validateProducts2 = (0, _validation.validateProducts)(data), error = _validateProducts2.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProductValidation(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var validateQuantity = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _validateAddProductQu, error;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _validateAddProductQu = (0, _validation.validateAddProductQuantity)(req.body), error = _validateAddProductQu.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function validateQuantity(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

var validateBestProducts = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _validateBestProduct, error;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _validateBestProduct = (0, _validation.validateBestProduct)(req.body), error = _validateBestProduct.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function validateBestProducts(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

var searchAnyProduct = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var search, data, _validateAnySearch, error;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            search = req.query.search;
            data = {
              search: search
            };
            _validateAnySearch = (0, _validation.validateAnySearch)(data), error = _validateAnySearch.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function searchAnyProduct(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = {
  createProductValidation: createProductValidation,
  updateProductValidation: updateProductValidation,
  searchProductName: searchProductName,
  searchProductCategory: searchProductCategory,
  validateBestProducts: validateBestProducts,
  validateQuantity: validateQuantity,
  searchAnyProduct: searchAnyProduct
};
exports["default"] = _default;