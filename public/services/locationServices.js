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

var _models = _interopRequireDefault(require("../models"));

var District = _models["default"].District,
    Sector = _models["default"].Sector,
    Neighbourhood = _models["default"].Neighbourhood;

var LocationServices = function LocationServices() {
  (0, _classCallCheck2["default"])(this, LocationServices);
};

(0, _defineProperty2["default"])(LocationServices, "getAllDistricts", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var allLocation;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return District.findAll();

        case 2:
          allLocation = _context.sent;
          return _context.abrupt("return", allLocation);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
(0, _defineProperty2["default"])(LocationServices, "updateDistrict", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newData) {
    var updated;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return District.update({
              price: newData.price
            }, {
              where: {
                district: newData.district
              }
            });

          case 2:
            updated = _context2.sent;
            return _context2.abrupt("return", updated);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(LocationServices, "getAllSectors", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allLocation;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Sector.findAll();

        case 2:
          allLocation = _context3.sent;
          return _context3.abrupt("return", allLocation);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(LocationServices, "getDistrictSectorS", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allLocation;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Sector.findAll({
              where: {
                districtId: id
              }
            });

          case 2:
            allLocation = _context4.sent;
            return _context4.abrupt("return", allLocation);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = LocationServices;
exports["default"] = _default;