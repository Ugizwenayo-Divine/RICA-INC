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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

var _authServices = _interopRequireDefault(require("../services/authServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _tokenServices = _interopRequireDefault(require("../services/tokenServices"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var successResponse = _responseHandler["default"].successResponse,
    errorResponse = _responseHandler["default"].errorResponse;
var saveUser = _authServices["default"].saveUser,
    userExists = _authServices["default"].userExists,
    updateType = _authServices["default"].updateType,
    deleteUser = _authServices["default"].deleteUser,
    findAllUsers = _authServices["default"].findAllUsers;
var generateToken = _authHelper["default"].generateToken,
    passwordHasher = _authHelper["default"].passwordHasher,
    convertToLowerCase = _authHelper["default"].convertToLowerCase;
var alreadyExistEmailOrUsername = _customMessages["default"].alreadyExistEmailOrUsername,
    userSignupSuccess = _customMessages["default"].userSignupSuccess,
    sameType = _customMessages["default"].sameType,
    typeAssigned = _customMessages["default"].typeAssigned,
    deleted = _customMessages["default"].deleted,
    allUsers = _customMessages["default"].allUsers;
var conflict = _statusCode["default"].conflict,
    badRequest = _statusCode["default"].badRequest,
    created = _statusCode["default"].created,
    ok = _statusCode["default"].ok;
var createToken = _tokenServices["default"].createToken,
    deleteToken = _tokenServices["default"].deleteToken;

var AuthenticationController = /*#__PURE__*/function () {
  function AuthenticationController() {
    (0, _classCallCheck2["default"])(this, AuthenticationController);
  }

  (0, _createClass2["default"])(AuthenticationController, null, [{
    key: "signUp",
    value: function () {
      var _signUp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var payload, email, checkEmail, password, dataWithoutPassword, userData, savedUser, savedUserObject, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = req.body;
                email = req.body.email;
                _context.prev = 2;
                _context.next = 5;
                return userExists('email', email.toLowerCase());

              case 5:
                checkEmail = _context.sent;

                if (!checkEmail) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", errorResponse(res, conflict, alreadyExistEmailOrUsername));

              case 8:
                _context.next = 10;
                return passwordHasher(payload.password);

              case 10:
                password = _context.sent;
                dataWithoutPassword = _lodash["default"].omit(payload, 'password');
                userData = _objectSpread(_objectSpread({}, dataWithoutPassword), {}, {
                  password: password
                });
                userData.email = convertToLowerCase(userData.email);
                _context.next = 16;
                return saveUser(userData);

              case 16:
                savedUser = _context.sent;
                savedUserObject = _lodash["default"].omit(savedUser, 'password');
                _context.next = 20;
                return generateToken(savedUserObject);

              case 20:
                token = _context.sent;
                _context.next = 23;
                return createToken(token);

              case 23:
                return _context.abrupt("return", successResponse(res, created, userSignupSuccess, token));

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](2);
                errorResponse(res, badRequest, _context.t0.message);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 26]]);
      }));

      function signUp(_x, _x2) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }]);
  return AuthenticationController;
}();

exports["default"] = AuthenticationController;
(0, _defineProperty2["default"])(AuthenticationController, "userLogin", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var loginUser, token, loggedUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loginUser = req.loginUser;
            _context2.prev = 1;
            _context2.next = 4;
            return generateToken(loginUser);

          case 4:
            token = _context2.sent;
            loggedUser = {
              firstName: loginUser.firstName,
              lastName: loginUser.lastName,
              email: loginUser.email,
              type: loginUser.type,
              phoneNumber: loginUser.phoneNumber,
              gender: loginUser.gender
            };
            _context2.next = 8;
            return createToken(token);

          case 8:
            successResponse(res, ok, _customMessages["default"].loginSuccess, token, loggedUser);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            errorResponse(res, badRequest, 'you are already logged in');

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AuthenticationController, "updateUserType", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, email, type, userExist;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, type = _req$body.type;
            _context3.prev = 1;
            _context3.next = 4;
            return userExists('email', email.toLowerCase());

          case 4:
            userExist = _context3.sent;

            if (!(userExist.dataValues.type === type)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", _responseHandler["default"].errorResponse(res, badRequest, sameType));

          case 7:
            _context3.next = 9;
            return updateType(req.body);

          case 9:
            return _context3.abrupt("return", _responseHandler["default"].successResponse(res, ok, typeAssigned));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            errorResponse(res, badRequest, _context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AuthenticationController, "userDeletion", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            data = {
              id: id
            };
            _context4.prev = 2;
            _context4.next = 5;
            return deleteUser(data);

          case 5:
            return _context4.abrupt("return", _responseHandler["default"].successResponse(res, ok, deleted));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            errorResponse(res, badRequest, 'You are not logged in');

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AuthenticationController, "allUsers", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return findAllUsers();

          case 3:
            users = _context5.sent;
            return _context5.abrupt("return", _responseHandler["default"].successResponse(res, ok, allUsers, null, users));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            errorResponse(res, badRequest, _context5.t0.message);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AuthenticationController, "userLogout", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            token = req.get('authorization');
            _context6.prev = 1;
            _context6.next = 4;
            return deleteToken(token);

          case 4:
            return _context6.abrupt("return", _responseHandler["default"].successResponse(res, ok, 'successful logged out'));

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](1);
            errorResponse(res, badRequest, _context6.t0.message);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());