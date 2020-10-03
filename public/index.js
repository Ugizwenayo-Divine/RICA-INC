"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _index = _interopRequireDefault(require("./routes/index"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT;
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'welcome'
  });
});
app.use(_index["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'The requested resource was not found'
  });
});
var server = app.listen(port, function () {
  console.log("Listening on port ".concat(server.address().port));
});
var _default = app;
exports["default"] = _default;