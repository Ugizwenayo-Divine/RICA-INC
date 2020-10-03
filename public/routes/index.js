"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./api/index"));

var allRoutes = _express["default"].Router();

allRoutes.use('/api', _index["default"]);
var _default = allRoutes;
exports["default"] = _default;