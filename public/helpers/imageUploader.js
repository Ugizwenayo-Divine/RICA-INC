"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cloudinary = require("cloudinary");

_dotenv["default"].config();

_cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var uploadToCloudinary = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(image) {
    var result, url, customError;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _cloudinary.v2.uploader.upload(image.path);

          case 3:
            result = _context.sent;
            url = result.url;
            return _context.abrupt("return", url);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            customError = "".concat(_context.t0, " '").concat(image.originalFilename, "'");
            throw customError;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function uploadToCloudinary(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = uploadToCloudinary;
exports["default"] = _default;