"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _authServices = _interopRequireDefault(require("../services/authServices"));

var _tokenServices = _interopRequireDefault(require("../services/tokenServices"));

var errorResponse = _responseHandler["default"].errorResponse;
var decodeToken = _authHelper["default"].decodeToken;
var tokenInvalid = _customMessages["default"].tokenInvalid,
    tokenMissing = _customMessages["default"].tokenMissing,
    notAllowed = _customMessages["default"].notAllowed,
    notUserExist = _customMessages["default"].notUserExist;
var userExists = _authServices["default"].userExists;
var badRequest = _statusCode["default"].badRequest,
    unAuthorized = _statusCode["default"].unAuthorized;
var getToken = _tokenServices["default"].getToken;

var isUserLoggedIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, checkToken, decodedToken, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.get('authorization');

            if (token) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", errorResponse(res, badRequest, tokenMissing));

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return getToken(token);

          case 6:
            checkToken = _context.sent;

            if (!checkToken) {
              _context.next = 18;
              break;
            }

            _context.next = 10;
            return decodeToken(token);

          case 10:
            decodedToken = _context.sent;
            _context.next = 13;
            return userExists('email', decodedToken.email);

          case 13:
            user = _context.sent;

            if (user) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", errorResponse(res, unAuthorized, notAllowed));

          case 16:
            req.sessionUser = decodedToken;
            return _context.abrupt("return", next());

          case 18:
            return _context.abrupt("return", errorResponse(res, badRequest, 'You are not logged in, login first!!!'));

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", errorResponse(res, badRequest, tokenInvalid));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 21]]);
  }));

  return function isUserLoggedIn(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var isUserAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var sessionUser, user, dataValues;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sessionUser = req.sessionUser;
            _context2.next = 3;
            return userExists('email', sessionUser.email);

          case 3:
            user = _context2.sent;
            dataValues = user.dataValues;

            if (!(dataValues.type != 'admin')) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", errorResponse(res, unAuthorized, notAllowed));

          case 7:
            return _context2.abrupt("return", next());

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isUserAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var doesUserExist = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var user, id, email;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.params.id) {
              _context3.next = 7;
              break;
            }

            id = req.params.id;
            _context3.next = 4;
            return userExists('id', id);

          case 4:
            user = _context3.sent;
            _context3.next = 11;
            break;

          case 7:
            email = req.body.email;
            _context3.next = 10;
            return userExists('email', email);

          case 10:
            user = _context3.sent;

          case 11:
            if (user) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", errorResponse(res, unAuthorized, notUserExist));

          case 13:
            return _context3.abrupt("return", next());

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function doesUserExist(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  isUserLoggedIn: isUserLoggedIn,
  isUserAdmin: isUserAdmin,
  doesUserExist: doesUserExist
};
exports["default"] = _default;