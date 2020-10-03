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

var Design = _models["default"].Design;

var DesignServices = /*#__PURE__*/function () {
  function DesignServices() {
    (0, _classCallCheck2["default"])(this, DesignServices);
  }

  (0, _createClass2["default"])(DesignServices, null, [{
    key: "DesignExists",
    value: function () {
      var _DesignExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(attr, val) {
        var design;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Design.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                design = _context.sent;
                return _context.abrupt("return", design);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function DesignExists(_x, _x2) {
        return _DesignExists.apply(this, arguments);
      }

      return DesignExists;
    }()
  }]);
  return DesignServices;
}();

(0, _defineProperty2["default"])(DesignServices, "createDesign", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var _yield$Design$create, dataValues;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Design.create(_objectSpread(_objectSpread({}, data), {}, {
              createdAt: new Date(),
              updatedAt: new Date()
            }), {
              fields: ['designBy', 'description', 'image', 'cloudinaryId', 'createdAt', 'updatedAt']
            });

          case 2:
            _yield$Design$create = _context2.sent;
            dataValues = _yield$Design$create.dataValues;
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
(0, _defineProperty2["default"])(DesignServices, "getAllDesign", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allDesign;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Design.findAll();

        case 2:
          allDesign = _context3.sent;
          return _context3.abrupt("return", allDesign);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(DesignServices, "getDesign", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allDesign;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Design.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allDesign = _context4.sent;
            return _context4.abrupt("return", allDesign);

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
(0, _defineProperty2["default"])(DesignServices, "deleteDesign", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedDesign;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Design.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedDesign = _context5.sent;
            return _context5.abrupt("return", deletedDesign);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(DesignServices, "updateDesign", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(newData) {
    var updatedDesign;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Design.update({
              description: newData.description,
              image: newData.image,
              cloudinaryId: newData.cloudinaryId
            }, {
              where: {
                id: newData.id
              }
            });

          case 2:
            updatedDesign = _context6.sent;
            return _context6.abrupt("return", updatedDesign);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = DesignServices;
exports["default"] = _default;