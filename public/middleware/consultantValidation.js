"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validation = require("../helpers/validation");

var createConsultantValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateConsultant, error;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateConsultant = (0, _validation.validateConsultant)(req.body), error = _validateConsultant.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createConsultantValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var updateDesignValidation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var design, keys, description, data, _validateConsultant2, error;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            design = req.design;
            keys = Object.keys(req.body);
            description = keys.find(function (key) {
              return key == 'description';
            });
            data = {
              description: description ? req.body.description : design.description
            };
            _validateConsultant2 = (0, _validation.validateConsultant)(data), error = _validateConsultant2.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateDesignValidation(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var updateStudyValidation = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var study, keys, description, data, _validateConsultant3, error;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            study = req.study;
            keys = Object.keys(req.body);
            description = keys.find(function (key) {
              return key == 'description';
            });
            data = {
              description: description ? req.body.description : study.description
            };
            _validateConsultant3 = (0, _validation.validateConsultant)(data), error = _validateConsultant3.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateStudyValidation(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  createConsultantValidation: createConsultantValidation,
  updateDesignValidation: updateDesignValidation,
  updateStudyValidation: updateStudyValidation
};
exports["default"] = _default;