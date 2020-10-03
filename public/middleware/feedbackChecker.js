"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _feedbackServices = _interopRequireDefault(require("../services/feedbackServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var feedbackExists = _feedbackServices["default"].feedbackExists;
var errorResponse = _responseHandler["default"].errorResponse;
var feedbackNotExist = _customMessages["default"].feedbackNotExist;
var badRequest = _statusCode["default"].badRequest;

var doesFeedbackExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var feedback, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return feedbackExists('id', id);

          case 4:
            feedback = _context.sent;

            if (!feedback) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", next());

          case 7:
            return _context.abrupt("return", errorResponse(res, badRequest, feedbackNotExist));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", errorResponse(res, badRequest, _context.t0.message));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function doesFeedbackExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  doesFeedbackExist: doesFeedbackExist
};
exports["default"] = _default;