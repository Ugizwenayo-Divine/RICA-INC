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

var _studySupervision = _interopRequireDefault(require("../services/studySupervision"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _uploadImage = _interopRequireDefault(require("../helpers/uploadImage"));

var createStudySupervision = _studySupervision["default"].createStudySupervision,
    getAllStudySupervision = _studySupervision["default"].getAllStudySupervision,
    getStudySupervision = _studySupervision["default"].getStudySupervision,
    deleteStudySupervision = _studySupervision["default"].deleteStudySupervision,
    updateStudySupervision = _studySupervision["default"].updateStudySupervision;
var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var error = _customMessages["default"].error,
    successCreation = _customMessages["default"].successCreation,
    wrongType = _customMessages["default"].wrongType,
    selectImage = _customMessages["default"].selectImage,
    deleted = _customMessages["default"].deleted;
var badRequest = _statusCode["default"].badRequest,
    created = _statusCode["default"].created,
    unAuthorized = _statusCode["default"].unAuthorized,
    unSupportedMedia = _statusCode["default"].unSupportedMedia,
    ok = _statusCode["default"].ok;

var StudySupervisionController = function StudySupervisionController() {
  (0, _classCallCheck2["default"])(this, StudySupervisionController);
};

(0, _defineProperty2["default"])(StudySupervisionController, "addStudySupervision", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var sessionUser, id, description, image, data, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('here22');
            sessionUser = req.sessionUser;
            id = sessionUser.id;
            description = req.body.description;
            _context.prev = 4;

            if (!(req.files && req.files.image)) {
              _context.next = 25;
              break;
            }

            if (!(req.files.image.type || req.files.image.length)) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return _uploadImage["default"].uploader(req.files.image);

          case 9:
            image = _context.sent;
            _context.next = 13;
            break;

          case 12:
            return _context.abrupt("return", errorResponse(res, badRequest, selectImage));

          case 13:
            if (!(!image.secure_url || image.secure_url.includes('null'))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", errorResponse(res, unSupportedMedia, wrongType));

          case 17:
            null;

          case 18:
            console.log('user', id);
            data = {
              studyBy: id,
              description: description,
              image: image.secure_url,
              cloudinaryId: image.public_id
            };
            _context.next = 22;
            return createStudySupervision(data);

          case 22:
            result = _context.sent;
            console.log(result, 'llll');
            return _context.abrupt("return", successResponse(res, created, successCreation, null, result));

          case 25:
            return _context.abrupt("return", errorResponse(res, unAuthorized, selectImage));

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](4);
            console.log('addd', _context.t0);
            return _context.abrupt("return", errorResponse(res, badRequest, error));

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 28]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(StudySupervisionController, "getAll", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var studySupervision;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getAllStudySupervision();

          case 3:
            studySupervision = _context2.sent;
            return _context2.abrupt("return", successResponse(res, ok, 'All available studySupervisions', null, studySupervision));

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
(0, _defineProperty2["default"])(StudySupervisionController, "getOneStudySupervision", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneStudySupervision;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return getStudySupervision(id);

          case 4:
            oneStudySupervision = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, 'The requested studySupervision', null, oneStudySupervision));

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
(0, _defineProperty2["default"])(StudySupervisionController, "deleteOneStudySupervision", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, study;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            study = req.study;
            _context4.next = 5;
            return _uploadImage["default"].deleteTheImage(study.cloudinaryId);

          case 5:
            _context4.next = 7;
            return deleteStudySupervision(id);

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
(0, _defineProperty2["default"])(StudySupervisionController, "studySupervisionUpdation", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var image, id, imageUrl, imageId, study, _image, secure_url, public_id, newData;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            imageUrl = null, imageId = null;
            study = req.study;

            if (!(req.files && req.files.image)) {
              _context5.next = 15;
              break;
            }

            _context5.next = 7;
            return _uploadImage["default"].deleteTheImage(study.cloudinaryId);

          case 7:
            _context5.next = 9;
            return _uploadImage["default"].uploader(req.files.image);

          case 9:
            image = _context5.sent;

            if (!(!image || image.secure_url.includes('null'))) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return", errorResponse(res, unSupportedMedia, wrongType));

          case 12:
            _image = image, secure_url = _image.secure_url, public_id = _image.public_id;
            imageUrl = secure_url;
            imageId = public_id;

          case 15:
            newData = {
              id: id,
              description: req.body.description || study.description,
              image: imageUrl || study.image,
              cloudinaryId: imageId || study.cloudinaryId
            };
            _context5.next = 18;
            return updateStudySupervision(newData);

          case 18:
            return _context5.abrupt("return", successResponse(res, ok, 'updated', null, null));

          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, error));

          case 24:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 21]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = StudySupervisionController;
exports["default"] = _default;