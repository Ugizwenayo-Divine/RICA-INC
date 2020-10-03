"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productController = _interopRequireDefault(require("../../controllers/productController"));

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _productValidation = _interopRequireDefault(require("../../middleware/productValidation"));

var _productChecker = _interopRequireDefault(require("../../middleware/productChecker"));

var multipart = (0, _connectMultiparty["default"])();
var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var createProductValidation = _productValidation["default"].createProductValidation,
    searchProductName = _productValidation["default"].searchProductName,
    searchProductCategory = _productValidation["default"].searchProductCategory,
    updateProductValidation = _productValidation["default"].updateProductValidation,
    validateBestProducts = _productValidation["default"].validateBestProducts,
    validateQuantity = _productValidation["default"].validateQuantity,
    searchAnyProduct = _productValidation["default"].searchAnyProduct;
var doesProductExist = _productChecker["default"].doesProductExist,
    doesProductNameExist = _productChecker["default"].doesProductNameExist;

var productRouter = _express["default"].Router();

productRouter.post('/add', multipart, isUserLoggedIn, isUserAdmin, createProductValidation, doesProductNameExist, _productController["default"].addProduct);
productRouter.get('/', _productController["default"].getAll);
productRouter.get('/searchname', searchProductName, _productController["default"].searchName);
productRouter.get('/searchcategory', searchProductCategory, _productController["default"].searchCategory);
productRouter.get('/any', searchAnyProduct, _productController["default"].searchAny);
productRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesProductExist, _productController["default"]["delete"]);
productRouter.patch('/:id', multipart, isUserLoggedIn, isUserAdmin, doesProductExist, updateProductValidation, _productController["default"].productUpdation);
productRouter.patch('/add-quantity/:id', isUserLoggedIn, isUserAdmin, doesProductExist, validateQuantity, _productController["default"].addProductQuantity);
productRouter.patch('/best/:id', isUserLoggedIn, isUserAdmin, doesProductExist, validateBestProducts, _productController["default"].addRemoveToBestProducts);
productRouter.get('/available', _productController["default"].getAllAvailableProducts);
productRouter.get('/product-type', _productController["default"].getAllProductTypeBased);
productRouter.get('/:id', doesProductExist, _productController["default"].getOneProduct);
var _default = productRouter;
exports["default"] = _default;