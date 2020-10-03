"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _designController = _interopRequireDefault(require("../../controllers/designController"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _consultantChecker = _interopRequireDefault(require("../../middleware/consultantChecker"));

var _consultantValidation = _interopRequireDefault(require("../../middleware/consultantValidation"));

var multipart = (0, _connectMultiparty["default"])();
var addDesign = _designController["default"].addDesign,
    getOneDesign = _designController["default"].getOneDesign,
    designUpdation = _designController["default"].designUpdation,
    deleteOneDesign = _designController["default"].deleteOneDesign,
    getAll = _designController["default"].getAll;
var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var createConsultantValidation = _consultantValidation["default"].createConsultantValidation,
    updateDesignValidation = _consultantValidation["default"].updateDesignValidation;
var doesDesignExist = _consultantChecker["default"].doesDesignExist;

var designRouter = _express["default"].Router();

designRouter.post('/add', multipart, isUserLoggedIn, isUserAdmin, createConsultantValidation, addDesign);
designRouter.get('/', getAll);
designRouter.get('/:id', doesDesignExist, getOneDesign);
designRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesDesignExist, deleteOneDesign);
designRouter.patch('/:id', multipart, isUserLoggedIn, isUserAdmin, doesDesignExist, updateDesignValidation, designUpdation);
var _default = designRouter;
exports["default"] = _default;