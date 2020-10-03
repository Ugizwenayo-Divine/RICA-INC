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

var Bonus = _models["default"].Bonus;

var BonusServices = /*#__PURE__*/function () {
  function BonusServices() {
    (0, _classCallCheck2["default"])(this, BonusServices);
  }

  (0, _createClass2["default"])(BonusServices, null, [{
    key: "bonusExists",
    value: function () {
      var _bonusExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(attr, val) {
        var bonus;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Bonus.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                bonus = _context.sent;
                return _context.abrupt("return", bonus);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function bonusExists(_x, _x2) {
        return _bonusExists.apply(this, arguments);
      }

      return bonusExists;
    }()
  }]);
  return BonusServices;
}();

(0, _defineProperty2["default"])(BonusServices, "createBonus", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var _yield$Bonus$create, dataValues;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Bonus.create(_objectSpread(_objectSpread({}, data), {}, {
              createdAt: new Date(),
              updatedAt: new Date()
            }), {
              fields: ['name', 'createdAt', 'updatedAt']
            });

          case 2:
            _yield$Bonus$create = _context2.sent;
            dataValues = _yield$Bonus$create.dataValues;
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
(0, _defineProperty2["default"])(BonusServices, "getAllBonus", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allBonus;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Bonus.findAll();

        case 2:
          allBonus = _context3.sent;
          return _context3.abrupt("return", allBonus);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(BonusServices, "deleteBonus", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var deletedBonus;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Bonus.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedBonus = _context4.sent;
            return _context4.abrupt("return", deletedBonus);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = BonusServices;
exports["default"] = _default;