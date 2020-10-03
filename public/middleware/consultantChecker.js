"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _studySupervision = _interopRequireDefault(require("../services/studySupervision"));

var _designService = _interopRequireDefault(require("../services/designService"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var getDesign = _designService["default"].getDesign;
var getStudySupervision = _studySupervision["default"].getStudySupervision;
var errorResponse = _responseHandler["default"].errorResponse;
var badRequest = _statusCode["default"].badRequest;

var doesDesignExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var design, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return getDesign(id);

          case 3:
            design = _context.sent;

            if (!design) {
              _context.next = 7;
              break;
            }

            req.design = design.dataValues;
            return _context.abrupt("return", next());

          case 7:
            return _context.abrupt("return", errorResponse(res, badRequest, 'The design does not exist'));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doesDesignExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var doesStudyExist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var study, id;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return getStudySupervision(id);

          case 3:
            study = _context2.sent;

            if (!study) {
              _context2.next = 7;
              break;
            }

            req.study = study.dataValues;
            return _context2.abrupt("return", next());

          case 7:
            return _context2.abrupt("return", errorResponse(res, badRequest, 'The study or supervision does not exist'));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function doesStudyExist(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  doesDesignExist: doesDesignExist,
  doesStudyExist: doesStudyExist
};
exports["default"] = _default;