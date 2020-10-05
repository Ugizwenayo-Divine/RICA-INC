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

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cloudinary = require("cloudinary");

_dotenv["default"].config();

var _process$env = process.env,
    CLOUDINARY_CLOUD_NAME = _process$env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY = _process$env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET = _process$env.CLOUDINARY_API_SECRET;

_cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

var extensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'PNG', 'JPG'];

var ImageUploader = /*#__PURE__*/function () {
  function ImageUploader() {
    (0, _classCallCheck2["default"])(this, ImageUploader);
  }

  (0, _createClass2["default"])(ImageUploader, null, [{
    key: "uploadImage",
    value: function () {
      var _uploadImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(image) {
        var imgExt, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imgExt = image.name.split('.').pop();

                if (!extensions.includes(imgExt)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return _cloudinary.v2.uploader.upload(image.path);

              case 4:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 6:
                return _context.abrupt("return", null);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function uploadImage(_x) {
        return _uploadImage.apply(this, arguments);
      }

      return uploadImage;
    }()
  }, {
    key: "uploader",
    value: function () {
      var _uploader = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(image) {
        var uploaded, combinedLinks, arr, i;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                combinedLinks = '';

                if (image.length) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 4;
                return this.uploadImage(image);

              case 4:
                uploaded = _context2.sent;
                return _context2.abrupt("return", uploaded);

              case 6:
                if (!image.length) {
                  _context2.next = 18;
                  break;
                }

                arr = image;
                i = 0;

              case 9:
                if (!(i < arr.length)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 12;
                return this.uploadImage(arr[i]);

              case 12:
                uploaded = _context2.sent;
                combinedLinks += "".concat(uploaded.url, ", ");

              case 14:
                i += 1;
                _context2.next = 9;
                break;

              case 17:
                return _context2.abrupt("return", combinedLinks);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploader(_x2) {
        return _uploader.apply(this, arguments);
      }

      return uploader;
    }()
  }, {
    key: "deleteTheImage",
    value: function () {
      var _deleteTheImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(cloudinaryId) {
        var result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = _cloudinary.v2.uploader.destroy(cloudinaryId);
                return _context3.abrupt("return", result);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteTheImage(_x3) {
        return _deleteTheImage.apply(this, arguments);
      }

      return deleteTheImage;
    }()
  }]);
  return ImageUploader;
}();

var _default = ImageUploader;
exports["default"] = _default;