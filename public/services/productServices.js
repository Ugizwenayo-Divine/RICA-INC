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

var Product = _models["default"].Product;
var Op = _sequelize["default"].Op;

var ProductHelper = /*#__PURE__*/function () {
  function ProductHelper() {
    (0, _classCallCheck2["default"])(this, ProductHelper);
  }

  (0, _createClass2["default"])(ProductHelper, null, [{
    key: "saveProduct",
    value: function () {
      var _saveProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(product) {
        var acceptedProduct;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Product.create(_objectSpread(_objectSpread({}, product), {}, {
                  type: 'normal',
                  createdAt: new Date(),
                  updatedAt: new Date()
                }), {
                  fields: ['userId', 'name', 'category', 'price', 'quantity', 'image', 'brand', 'description', 'due_time', 'type', 'cloudinaryId', 'createdAt', 'updatedAt']
                });

              case 2:
                acceptedProduct = _context.sent;
                return _context.abrupt("return", acceptedProduct);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveProduct(_x) {
        return _saveProduct.apply(this, arguments);
      }

      return saveProduct;
    }()
  }, {
    key: "productExists",
    value: function () {
      var _productExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(attr, val) {
        var product;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Product.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                product = _context2.sent;
                return _context2.abrupt("return", product);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function productExists(_x2, _x3) {
        return _productExists.apply(this, arguments);
      }

      return productExists;
    }()
  }]);
  return ProductHelper;
}();

(0, _defineProperty2["default"])(ProductHelper, "getAllProducts", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allProducts;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Product.findAll();

        case 2:
          allProducts = _context3.sent;
          return _context3.abrupt("return", allProducts);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(ProductHelper, "getProduct", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allProducts;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Product.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allProducts = _context4.sent;
            return _context4.abrupt("return", allProducts);

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
(0, _defineProperty2["default"])(ProductHelper, "deleteProduct", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedProduct;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Product.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedProduct = _context5.sent;
            return _context5.abrupt("return", deletedProduct);

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
(0, _defineProperty2["default"])(ProductHelper, "updateProduct", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(newData) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Product.update({
              name: newData.name,
              category: newData.category,
              price: newData.price,
              quantity: newData.quantity,
              image: newData.image,
              brand: newData.brand,
              description: newData.description,
              cloudinaryId: newData.cloudinaryId
            }, {
              where: {
                id: newData.id
              }
            });

          case 2:
            updatedProduct = _context6.sent;
            return _context6.abrupt("return", updatedProduct);

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
(0, _defineProperty2["default"])(ProductHelper, "searchByName", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(name) {
    var allProducts;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Product.findAll({
              where: {
                name: name
              }
            });

          case 2:
            allProducts = _context7.sent;
            return _context7.abrupt("return", allProducts);

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
(0, _defineProperty2["default"])(ProductHelper, "searchByCategory", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(category) {
    var allProducts;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Product.findAll({
              where: {
                category: category
              }
            });

          case 2:
            allProducts = _context8.sent;
            return _context8.abrupt("return", allProducts);

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
(0, _defineProperty2["default"])(ProductHelper, "addRemoveToBestProducts", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(product) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Product.update({
              type: product.type
            }, {
              where: {
                id: product.id
              }
            });

          case 2:
            updatedProduct = _context9.sent;
            return _context9.abrupt("return", updatedProduct);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductHelper, "getAllBestProducts", /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(type) {
    var allProducts;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return Product.findAll({
              where: {
                type: type
              }
            });

          case 2:
            allProducts = _context10.sent;
            return _context10.abrupt("return", allProducts);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function (_x10) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductHelper, "getAllAvailableProducts", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
  var allProducts;
  return _regenerator["default"].wrap(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Product.findAll({
            where: {
              quantity: (0, _defineProperty2["default"])({}, Op.ne, 0)
            }
          });

        case 2:
          allProducts = _context11.sent;
          return _context11.abrupt("return", allProducts);

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  }, _callee11);
})));
(0, _defineProperty2["default"])(ProductHelper, "insertProductQuantity", /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(product) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return Product.update({
              quantity: product.quantity
            }, {
              where: {
                id: product.id
              }
            });

          case 2:
            updatedProduct = _context12.sent;
            return _context12.abrupt("return", updatedProduct);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x11) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductHelper, "findByNameCategoryBrand", /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(value) {
    var product;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return Product.findAll({
              where: (0, _defineProperty2["default"])({}, Op.or, [_sequelize["default"].where(_sequelize["default"].fn('lower', _sequelize["default"].col('name')), (0, _defineProperty2["default"])({}, Op.like, "%".concat(value.toLowerCase(), "%"))), _sequelize["default"].where(_sequelize["default"].fn('lower', _sequelize["default"].col('brand')), (0, _defineProperty2["default"])({}, Op.like, "%".concat(value.toLowerCase(), "%"))), _sequelize["default"].where(_sequelize["default"].fn('lower', _sequelize["default"].col('category')), (0, _defineProperty2["default"])({}, Op.like, "%".concat(value.toLowerCase(), "%")))])
            });

          case 2:
            product = _context13.sent;
            return _context13.abrupt("return", product);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function (_x12) {
    return _ref11.apply(this, arguments);
  };
}());
var _default = ProductHelper;
exports["default"] = _default;