"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _advertisementChecker = _interopRequireDefault(require("../../middleware/advertisementChecker"));

var _advertisementController = _interopRequireDefault(require("../../controllers/advertisementController"));

var _advertisementValidation = _interopRequireDefault(require("../../middleware/advertisementValidation"));

var multipart = (0, _connectMultiparty["default"])();
var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var doesAdvertisementExist = _advertisementChecker["default"].doesAdvertisementExist;
var addAdvertisement = _advertisementController["default"].addAdvertisement,
    advertisementUpdation = _advertisementController["default"].advertisementUpdation,
    deleteOneAdvertisement = _advertisementController["default"].deleteOneAdvertisement,
    getAll = _advertisementController["default"].getAll,
    getOneAdvertisement = _advertisementController["default"].getOneAdvertisement,
    getAllExternal = _advertisementController["default"].getAllExternal,
    getAllInternal = _advertisementController["default"].getAllInternal;
var advertisementValidation = _advertisementValidation["default"].advertisementValidation,
    updateValidation = _advertisementValidation["default"].updateValidation;

var advertisementRouter = _express["default"].Router();

advertisementRouter.post('/add', multipart, isUserLoggedIn, isUserAdmin, advertisementValidation, addAdvertisement);
advertisementRouter.get('/', getAll);
advertisementRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesAdvertisementExist, deleteOneAdvertisement);
advertisementRouter.patch('/:id', multipart, isUserLoggedIn, isUserAdmin, doesAdvertisementExist, updateValidation, advertisementUpdation);
advertisementRouter.get('/internal', getAllInternal);
advertisementRouter.get('/external', getAllExternal);
advertisementRouter.get('/:id', doesAdvertisementExist, getOneAdvertisement);
var _default = advertisementRouter;
exports["default"] = _default;