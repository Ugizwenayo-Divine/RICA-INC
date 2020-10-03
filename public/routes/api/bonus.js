"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _bonusController = _interopRequireDefault(require("../../controllers/bonusController"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var allBonus = _bonusController["default"].allBonus,
    bonusCreation = _bonusController["default"].bonusCreation,
    deleteBonus = _bonusController["default"].deleteBonus;

var bonusRouter = _express["default"].Router();

bonusRouter.post('/add', isUserLoggedIn, isUserAdmin, bonusCreation);
bonusRouter.get('/', allBonus);
bonusRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, deleteBonus);
var _default = bonusRouter;
exports["default"] = _default;