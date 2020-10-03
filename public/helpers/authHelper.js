"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _lodash = _interopRequireDefault(require("lodash"));

var passwordHasher = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(password) {
    var salt, hashedPassword;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt["default"].genSalt(10);

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return _bcrypt["default"].hash(password, salt);

          case 5:
            hashedPassword = _context.sent;
            return _context.abrupt("return", hashedPassword);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function passwordHasher(_x) {
    return _ref.apply(this, arguments);
  };
}();

var generateToken = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var tokenData, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tokenData = _lodash["default"].omit(data, 'password');
            token = _jsonwebtoken["default"].sign(tokenData, process.env.JWT_KEY, {
              expiresIn: "".concat(process.env.SIGN_UP_TOKEN_EXPIRES_IN)
            });
            return _context2.abrupt("return", token);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function generateToken(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var decodeToken = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(token) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = _jsonwebtoken["default"].verify(token, process.env.JWT_KEY);
            return _context3.abrupt("return", data);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function decodeToken(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var convertToLowerCase = function convertToLowerCase(text) {
  if (text) {
    return text.toLowerCase();
  }

  return '';
};

var _default = {
  passwordHasher: passwordHasher,
  generateToken: generateToken,
  decodeToken: decodeToken,
  convertToLowerCase: convertToLowerCase
};
exports["default"] = _default;