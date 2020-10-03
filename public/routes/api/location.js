"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _locationController = _interopRequireDefault(require("../../controllers/locationController"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var updateTransportPrice = _locationController["default"].updateTransportPrice,
    allDistricts = _locationController["default"].allDistricts,
    allSectors = _locationController["default"].allSectors,
    getSectorsByDistrict = _locationController["default"].getSectorsByDistrict;

var locationRouter = _express["default"].Router();

locationRouter.get('/', allDistricts);
locationRouter.get('/sector', allSectors);
locationRouter.get('/sector/:id', getSectorsByDistrict);
locationRouter.patch('/:name', isUserLoggedIn, isUserAdmin, updateTransportPrice);
var _default = locationRouter;
exports["default"] = _default;