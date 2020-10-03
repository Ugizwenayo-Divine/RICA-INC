"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _advertisementServices = _interopRequireDefault(require("../services/advertisementServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var getAdvertisement = _advertisementServices["default"].getAdvertisement;
var errorResponse = _responseHandler["default"].errorResponse;
var noAdvertisement = _customMessages["default"].noAdvertisement;
var badRequest = _statusCode["default"].badRequest;

var doesAdvertisementExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var advertisement, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return getAdvertisement(id);

          case 3:
            advertisement = _context.sent;

            if (!advertisement) {
              _context.next = 7;
              break;
            }

            req.advertisement = advertisement.dataValues;
            return _context.abrupt("return", next());

          case 7:
            return _context.abrupt("return", errorResponse(res, badRequest, noAdvertisement));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doesAdvertisementExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  doesAdvertisementExist: doesAdvertisementExist
};
exports["default"] = _default;