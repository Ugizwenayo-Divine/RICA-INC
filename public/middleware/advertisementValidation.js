"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validation = require("../helpers/validation");

var advertisementValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateAdvertisemen, error;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateAdvertisemen = (0, _validation.validateAdvertisement)(req.body), error = _validateAdvertisemen.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function advertisementValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var updateValidation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var advertisement, keys, title, description, type, advertisingCompany, data, _validateAdvertisemen2, error;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            advertisement = req.advertisement;
            keys = Object.keys(req.body);
            title = keys.find(function (key) {
              return key == 'title';
            });
            description = keys.find(function (key) {
              return key == 'description';
            });
            type = keys.find(function (key) {
              return key == 'type';
            });
            advertisingCompany = keys.find(function (key) {
              return key == 'advertsingCompany';
            });
            data = {
              title: title ? req.body.title : advertisement.title,
              description: description ? req.body.description : advertisement.description,
              type: type ? req.body.type : advertisement.type,
              advertisingCompany: advertisingCompany ? req.body.advertisingCompany : advertisement.advertisingCompany
            };
            _validateAdvertisemen2 = (0, _validation.validateAdvertisement)(data), error = _validateAdvertisemen2.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateValidation(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  advertisementValidation: advertisementValidation,
  updateValidation: updateValidation
};
exports["default"] = _default;