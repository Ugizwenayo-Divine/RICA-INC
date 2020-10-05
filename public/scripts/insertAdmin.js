"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _models = _interopRequireDefault(require("../models"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

_dotenv["default"].config();

var passwordHasher = _authHelper["default"].passwordHasher;
var User = _models["default"].User;
var admin = {
  firstName: 'Elie',
  lastName: 'Tuyishime',
  email: 'elietu@gmail.com',
  gender: 'male',
  password: process.env.ADMIN_PASSWORD,
  type: 'admin',
  phoneNumber: '0781825085',
  createdAt: new Date(),
  updatedAt: new Date()
};

var registerAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var _yield$User$create, dataValues;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return passwordHasher(data.password);

          case 2:
            data.password = _context.sent;
            _context.next = 5;
            return User.create(data, {
              fields: ['firstName', 'lastName', 'email', 'password', 'gender', 'phoneNumber', 'type', 'createAt', 'updatedAt']
            });

          case 5:
            _yield$User$create = _context.sent;
            dataValues = _yield$User$create.dataValues;
            return _context.abrupt("return", dataValues);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registerAdmin(_x) {
    return _ref.apply(this, arguments);
  };
}();

registerAdmin(admin);
var _default = registerAdmin;
exports["default"] = _default;