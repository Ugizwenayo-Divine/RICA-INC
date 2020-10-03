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

var _productServices = _interopRequireDefault(require("../services/productServices"));

var _uploadImage = _interopRequireDefault(require("../helpers/uploadImage"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var error = _customMessages["default"].error,
    wrongType = _customMessages["default"].wrongType,
    allProducts = _customMessages["default"].allProducts,
    productCategoryFound = _customMessages["default"].productCategoryFound,
    productNameFound = _customMessages["default"].productNameFound,
    products = _customMessages["default"].products,
    deleted = _customMessages["default"].deleted,
    best = _customMessages["default"].best,
    notBest = _customMessages["default"].notBest;
var badRequest = _statusCode["default"].badRequest,
    unSupportedMedia = _statusCode["default"].unSupportedMedia,
    ok = _statusCode["default"].ok;

var ProductController = /*#__PURE__*/function () {
  function ProductController() {
    (0, _classCallCheck2["default"])(this, ProductController);
  }

  (0, _createClass2["default"])(ProductController, null, [{
    key: "addProduct",
    value: function () {
      var _addProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var sessionUser, id, image, _req$body, name, category, price, brand, due_time, quantity, description, datas;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionUser = req.sessionUser;
                id = sessionUser.id;
                _context.prev = 2;

                if (!(req.files && req.files.image)) {
                  _context.next = 21;
                  break;
                }

                if (!(req.files.image.type || req.files.image.length)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 7;
                return _uploadImage["default"].uploader(req.files.image);

              case 7:
                image = _context.sent;
                _context.next = 11;
                break;

              case 10:
                return _context.abrupt("return", res.status(400).json({
                  status: 400,
                  error: 'Please select atleast one image'
                }));

              case 11:
                if (!(!image || image.url.includes('null'))) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", res.status(415).json({
                  status: 415,
                  error: 'Please select the right type of image'
                }));

              case 15:
                null;

              case 16:
                _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, brand = _req$body.brand, due_time = _req$body.due_time, quantity = _req$body.quantity, description = _req$body.description;
                _context.next = 19;
                return _productServices["default"].saveProduct({
                  userId: id,
                  name: name,
                  category: category,
                  price: "".concat(price, " RWF"),
                  quantity: quantity,
                  image: image.url,
                  brand: brand,
                  description: description,
                  due_time: due_time,
                  cloudinaryId: image.public_id
                });

              case 19:
                datas = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Product Successfully Added',
                  data: datas
                }));

              case 21:
                return _context.abrupt("return", res.status(401).json({
                  status: 401,
                  error: 'Please select one or more images'
                }));

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  message: _context.t0.message
                }));

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 24]]);
      }));

      function addProduct(_x, _x2) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }]);
  return ProductController;
}();

(0, _defineProperty2["default"])(ProductController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _products;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _productServices["default"].getAllProducts();

          case 3:
            _products = _context2.sent;
            return _context2.abrupt("return", successResponse(res, ok, allProducts, null, _products));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "getOneProduct", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneProduct;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _productServices["default"].getProduct(id);

          case 4:
            oneProduct = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, products, null, oneProduct));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "searchName", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var name, foundName;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            name = req.query.name;
            _context4.next = 4;
            return _productServices["default"].searchByName(name);

          case 4:
            foundName = _context4.sent;

            if (!(foundName.length == 0)) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", errorResponse(res, badRequest, 'Product does not exist'));

          case 9:
            return _context4.abrupt("return", successResponse(res, ok, productNameFound, null, foundName));

          case 10:
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0, 'error');
            return _context4.abrupt("return", errorResponse(res, badRequest, _context4.t0));

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function (_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "searchCategory", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var category, foundCategory;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            category = req.query.category;
            _context5.next = 4;
            return _productServices["default"].searchByCategory(category);

          case 4:
            foundCategory = _context5.sent;

            if (!(foundCategory.length >= 1)) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", successResponse(res, ok, productCategoryFound, null, foundCategory));

          case 9:
            return _context5.abrupt("return", res.status(400).json({
              status: 400,
              error: 'Product with that category does not exist'
            }));

          case 10:
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, _context5.t0));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "delete", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, _products2;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _products2 = req.products;
            _context6.next = 5;
            return _uploadImage["default"].deleteTheImage(_products2.cloudinaryId);

          case 5:
            _context6.next = 7;
            return _productServices["default"].deleteProduct(id);

          case 7:
            return _context6.abrupt("return", successResponse(res, ok, deleted, null, null));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", errorResponse(res, badRequest, error));

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function (_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "productUpdation", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var image, id, imageUrl, imageId, _products3, _image, url, public_id, newData;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            imageUrl = null, imageId = null;
            _products3 = req.products;

            if (!(req.files && req.files.image)) {
              _context7.next = 15;
              break;
            }

            _context7.next = 7;
            return _uploadImage["default"].deleteTheImage(_products3.cloudinaryId);

          case 7:
            _context7.next = 9;
            return _uploadImage["default"].uploader(req.files.image);

          case 9:
            image = _context7.sent;

            if (!(!image || image.url.includes('null'))) {
              _context7.next = 12;
              break;
            }

            return _context7.abrupt("return", errorResponse(res, unSupportedMedia, wrongType));

          case 12:
            _image = image, url = _image.url, public_id = _image.public_id;
            imageUrl = url;
            imageId = public_id;

          case 15:
            newData = {
              id: id,
              name: req.body.name || _products3.name,
              category: req.body.category || _products3.category,
              price: "".concat(req.body.price || _products3.price, " RWF"),
              quantity: req.body.quantity || _products3.quantity,
              image: imageUrl || _products3.image,
              brand: req.body.brand || _products3.brand,
              description: req.body.description || _products3.description,
              cloudinaryId: imageId || _products3.cloudinaryId
            };
            _context7.next = 18;
            return _productServices["default"].updateProduct(newData);

          case 18:
            return _context7.abrupt("return", successResponse(res, ok, 'updated', null, null));

          case 21:
            _context7.prev = 21;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            return _context7.abrupt("return", errorResponse(res, badRequest, error));

          case 25:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 21]]);
  }));

  return function (_x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "addRemoveToBestProducts", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var type, id, data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            type = req.body.type;
            id = req.params.id;
            data = {
              id: id,
              type: type
            };
            _context8.next = 6;
            return _productServices["default"].addRemoveToBestProducts(data);

          case 6:
            return _context8.abrupt("return", successResponse(res, ok, notBest, null, null));

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", errorResponse(res, badRequest, _context8.t0.message));

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 9]]);
  }));

  return function (_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "getAllProductTypeBased", /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var type, _products4;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            type = req.query.type;
            _context9.prev = 1;
            _context9.next = 4;
            return _productServices["default"].getAllBestProducts(type);

          case 4:
            _products4 = _context9.sent;
            return _context9.abrupt("return", successResponse(res, ok, 'All requested products', null, _products4));

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            return _context9.abrupt("return", errorResponse(res, badRequest, _context9.t0.message));

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 8]]);
  }));

  return function (_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "getAllAvailableProducts", /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var _products5;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _productServices["default"].getAllAvailableProducts();

          case 3:
            _products5 = _context10.sent;
            return _context10.abrupt("return", successResponse(res, ok, 'All available products', null, _products5));

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return", errorResponse(res, badRequest, _context10.t0.message));

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));

  return function (_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "addProductQuantity", /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var id, products, product, _products6;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = req.params.id;
            products = req.products;
            product = {
              id: id,
              quantity: parseInt(products.quantity) + parseInt(req.body.quantity)
            };
            _context11.prev = 3;
            _context11.next = 6;
            return _productServices["default"].insertProductQuantity(product);

          case 6:
            _products6 = _context11.sent;
            return _context11.abrupt("return", successResponse(res, ok, 'Quantity inserted', null, _products6));

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](3);
            return _context11.abrupt("return", errorResponse(res, badRequest, _context11.t0.message));

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[3, 10]]);
  }));

  return function (_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "searchAny", /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var search, foundName;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            search = req.query.search;
            _context12.next = 4;
            return _productServices["default"].findByNameCategoryBrand(search);

          case 4:
            foundName = _context12.sent;

            if (!(foundName.length == 0)) {
              _context12.next = 9;
              break;
            }

            return _context12.abrupt("return", errorResponse(res, badRequest, 'Product does not exist'));

          case 9:
            return _context12.abrupt("return", successResponse(res, ok, productNameFound, null, foundName));

          case 10:
            _context12.next = 16;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0, 'error');
            return _context12.abrupt("return", errorResponse(res, badRequest, _context12.t0));

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 12]]);
  }));

  return function (_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());
var _default = ProductController;
exports["default"] = _default;