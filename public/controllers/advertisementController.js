"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _advertisementServices = _interopRequireDefault(require("../services/advertisementServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _uploadImage = _interopRequireDefault(require("../helpers/uploadImage"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

var createAdvertisement = _advertisementServices["default"].createAdvertisement,
    getAllAdvertisement = _advertisementServices["default"].getAllAdvertisement,
    getAdvertisement = _advertisementServices["default"].getAdvertisement,
    deleteAdvertisement = _advertisementServices["default"].deleteAdvertisement,
    updateAdvertisement = _advertisementServices["default"].updateAdvertisement,
    getAllAdvertisementByType = _advertisementServices["default"].getAllAdvertisementByType;
var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var error = _customMessages["default"].error,
    successCreation = _customMessages["default"].successCreation,
    wrongType = _customMessages["default"].wrongType,
    selectImage = _customMessages["default"].selectImage,
    allAdvertisement = _customMessages["default"].allAdvertisement,
    advertisement = _customMessages["default"].advertisement,
    deleted = _customMessages["default"].deleted,
    advertisementExist = _customMessages["default"].advertisementExist;
var badRequest = _statusCode["default"].badRequest,
    created = _statusCode["default"].created,
    unAuthorized = _statusCode["default"].unAuthorized,
    unSupportedMedia = _statusCode["default"].unSupportedMedia,
    ok = _statusCode["default"].ok;
var convertToLowerCase = _authHelper["default"].convertToLowerCase;

var AdvertisementController = function AdvertisementController() {
  (0, _classCallCheck2["default"])(this, AdvertisementController);
};

(0, _defineProperty2["default"])(AdvertisementController, "addAdvertisement", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var sessionUser, id, _req$body, title, description, type, advertisingCompany, image, data, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sessionUser = req.sessionUser;
            id = sessionUser.id;
            _req$body = req.body, title = _req$body.title, description = _req$body.description, type = _req$body.type, advertisingCompany = _req$body.advertisingCompany;
            _context.prev = 3;

            if (!(req.files && req.files.image)) {
              _context.next = 31;
              break;
            }

            if (!(req.files.image.type || req.files.image.length)) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return _uploadImage["default"].uploader(req.files.image);

          case 8:
            image = _context.sent;
            _context.next = 12;
            break;

          case 11:
            return _context.abrupt("return", errorResponse(res, badRequest, selectImage));

          case 12:
            if (!(!image.url || image.url.includes('null'))) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", errorResponse(res, unSupportedMedia, wrongType));

          case 16:
            null;

          case 17:
            _context.t0 = id;
            _context.t1 = title;
            _context.t2 = description;
            _context.next = 22;
            return convertToLowerCase(type);

          case 22:
            _context.t3 = _context.sent;
            _context.t4 = advertisingCompany;
            _context.t5 = image.url;
            _context.t6 = image.public_id;
            data = {
              advertisedBy: _context.t0,
              title: _context.t1,
              description: _context.t2,
              type: _context.t3,
              advertisingCompany: _context.t4,
              image: _context.t5,
              cloudinaryId: _context.t6
            };
            _context.next = 29;
            return createAdvertisement(data);

          case 29:
            result = _context.sent;
            return _context.abrupt("return", successResponse(res, created, successCreation, null, result));

          case 31:
            return _context.abrupt("return", errorResponse(res, unAuthorized, selectImage));

          case 34:
            _context.prev = 34;
            _context.t7 = _context["catch"](3);
            return _context.abrupt("return", errorResponse(res, badRequest, advertisementExist));

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 34]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AdvertisementController, "getAll", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _advertisement;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getAllAdvertisement();

          case 3:
            _advertisement = _context2.sent;
            return _context2.abrupt("return", successResponse(res, ok, allAdvertisement, null, _advertisement));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AdvertisementController, "getOneAdvertisement", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneAdvertisement;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return getAdvertisement(id);

          case 4:
            oneAdvertisement = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, advertisement, null, oneAdvertisement));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AdvertisementController, "deleteOneAdvertisement", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _advertisement2;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _advertisement2 = req.advertisement;
            _context4.next = 5;
            return _uploadImage["default"].deleteTheImage(_advertisement2.cloudinaryId);

          case 5:
            _context4.next = 7;
            return deleteAdvertisement(id);

          case 7:
            return _context4.abrupt("return", successResponse(res, ok, deleted, null, null));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", errorResponse(res, badRequest, error));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AdvertisementController, "advertisementUpdation", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var image, id, imageUrl, imageId, _advertisement3, _image, url, public_id, convertedType, newData;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            imageUrl = null, imageId = null;
            _advertisement3 = req.advertisement;

            if (!(req.files && req.files.image)) {
              _context5.next = 15;
              break;
            }

            _context5.next = 7;
            return _uploadImage["default"].deleteTheImage(_advertisement3.cloudinaryId);

          case 7:
            _context5.next = 9;
            return _uploadImage["default"].uploader(req.files.image);

          case 9:
            image = _context5.sent;

            if (!(!image || image.url.includes('null'))) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return", errorResponse(res, unSupportedMedia, wrongType));

          case 12:
            _image = image, url = _image.url, public_id = _image.public_id;
            imageUrl = url;
            imageId = public_id;

          case 15:
            if (!req.body.type) {
              _context5.next = 21;
              break;
            }

            _context5.next = 18;
            return convertToLowerCase(req.body.type);

          case 18:
            _context5.t0 = _context5.sent;
            _context5.next = 22;
            break;

          case 21:
            _context5.t0 = null;

          case 22:
            convertedType = _context5.t0;
            newData = {
              id: id,
              title: req.body.title || _advertisement3.title,
              description: req.body.description || _advertisement3.description,
              type: convertedType || _advertisement3.type,
              advertisingCompany: req.body.advertisingCompany || _advertisement3.advertisingCompany,
              image: imageUrl || _advertisement3.image,
              cloudinaryId: imageId || _advertisement3.cloudinaryId
            };
            _context5.next = 26;
            return updateAdvertisement(newData);

          case 26:
            return _context5.abrupt("return", successResponse(res, ok, 'updated', null, null));

          case 29:
            _context5.prev = 29;
            _context5.t1 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, error));

          case 32:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 29]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AdvertisementController, "getAllExternal", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _advertisement4;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return getAllAdvertisementByType('external');

          case 3:
            _advertisement4 = _context6.sent;
            return _context6.abrupt("return", successResponse(res, ok, allAdvertisement, null, _advertisement4));

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", errorResponse(res, badRequest, _context6.t0));

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AdvertisementController, "getAllInternal", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _advertisement5;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return getAllAdvertisementByType('internal');

          case 3:
            _advertisement5 = _context7.sent;
            return _context7.abrupt("return", successResponse(res, ok, allAdvertisement, null, _advertisement5));

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", errorResponse(res, badRequest, _context7.t0));

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
var _default = AdvertisementController;
exports["default"] = _default;