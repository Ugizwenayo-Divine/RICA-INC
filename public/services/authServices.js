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

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var User = _models["default"].User;

var UserServices = /*#__PURE__*/function () {
  function UserServices() {
    (0, _classCallCheck2["default"])(this, UserServices);
  }

  (0, _createClass2["default"])(UserServices, null, [{
    key: "userExists",
    value: function () {
      var _userExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(attr, val) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return User.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                user = _context.sent;
                return _context.abrupt("return", user);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function userExists(_x, _x2) {
        return _userExists.apply(this, arguments);
      }

      return userExists;
    }()
  }]);
  return UserServices;
}();

(0, _defineProperty2["default"])(UserServices, "saveUser", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var _yield$User$create, dataValues;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return User.create(_objectSpread(_objectSpread({}, data), {}, {
              type: 'client',
              createdAt: new Date(),
              updatedAt: new Date()
            }), {
              fields: ['firstName', 'lastName', 'email', 'password', 'gender', 'phoneNumber', 'type', 'createdAt', 'updatedAt']
            });

          case 2:
            _yield$User$create = _context2.sent;
            dataValues = _yield$User$create.dataValues;
            return _context2.abrupt("return", dataValues);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UserServices, "updateType", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(newData) {
    var updateType;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return User.update({
              type: newData.type
            }, {
              where: {
                email: newData.email
              }
            });

          case 2:
            updateType = _context3.sent;
            return _context3.abrupt("return", updateType);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UserServices, "deleteUser", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(newData) {
    var deletedUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return User.destroy({
              where: {
                id: newData.id
              }
            });

          case 2:
            deletedUser = _context4.sent;
            return _context4.abrupt("return", deletedUser);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UserServices, "findAllUsers", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
  var allUsers;
  return _regenerator["default"].wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return User.findAll();

        case 2:
          allUsers = _context5.sent;
          return _context5.abrupt("return", allUsers);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
})));
var _default = UserServices;
exports["default"] = _default;