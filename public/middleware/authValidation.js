"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _lodash = _interopRequireDefault(require("lodash"));

var _validation = require("../helpers/validation");

var _authServices = _interopRequireDefault(require("../services/authServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

var userExists = _authServices["default"].userExists;
var errorResponse = _responseHandler["default"].errorResponse;
var forbidden = _statusCode["default"].forbidden;
var wrongcredentials = _customMessages["default"].wrongcredentials;
var passwordHasher = _authHelper["default"].passwordHasher;

var signupValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateSignup, error;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateSignup = (0, _validation.validateSignup)(req.body), error = _validateSignup.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signupValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var loginValidation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _validateLogin, error;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _validateLogin = (0, _validation.validateLogin)(req.body), error = _validateLogin.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loginValidation(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var checkUserExistance = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var checkUser, dataValues, password;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return userExists('email', req.body.email);

          case 2:
            checkUser = _context3.sent;

            if (!checkUser) {
              _context3.next = 12;
              break;
            }

            dataValues = checkUser.dataValues;
            _context3.next = 7;
            return _bcrypt["default"].compare(req.body.password, dataValues.password);

          case 7:
            password = _context3.sent;

            if (password) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", errorResponse(res, forbidden, wrongcredentials));

          case 10:
            req.loginUser = _lodash["default"].omit(dataValues, 'password');
            return _context3.abrupt("return", next());

          case 12:
            return _context3.abrupt("return", errorResponse(res, forbidden, wrongcredentials));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function checkUserExistance(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var roleValidation = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _validateRole, error;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _validateRole = (0, _validation.validateRole)(req.body), error = _validateRole.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function roleValidation(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = {
  signupValidation: signupValidation,
  checkUserExistance: checkUserExistance,
  loginValidation: loginValidation,
  roleValidation: roleValidation
};
exports["default"] = _default;