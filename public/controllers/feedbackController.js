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

var _feedbackServices = _interopRequireDefault(require("../services/feedbackServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var successResponse = _responseHandler["default"].successResponse,
    errorResponse = _responseHandler["default"].errorResponse;
var createFeedback = _feedbackServices["default"].createFeedback,
    getAllFeedbacks = _feedbackServices["default"].getAllFeedbacks,
    deleteFeedback = _feedbackServices["default"].deleteFeedback;
var allFeedback = _customMessages["default"].allFeedback,
    deleted = _customMessages["default"].deleted,
    error = _customMessages["default"].error,
    notCreated = _customMessages["default"].notCreated,
    feedbackExists = _customMessages["default"].feedbackExists;
var badRequest = _statusCode["default"].badRequest,
    created = _statusCode["default"].created,
    ok = _statusCode["default"].ok;

var FeedbackController = /*#__PURE__*/function () {
  function FeedbackController() {
    (0, _classCallCheck2["default"])(this, FeedbackController);
  }

  (0, _createClass2["default"])(FeedbackController, null, [{
    key: "feedbackCreation",
    value: function () {
      var _feedbackCreation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var sessionUser, data, createdData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionUser = req.sessionUser;
                _context.prev = 1;
                data = {
                  createdBy: sessionUser.id,
                  feedback: req.body.feedback
                };
                _context.next = 5;
                return createFeedback(data);

              case 5:
                createdData = _context.sent;

                if (!createdData) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", successResponse(res, created, _customMessages["default"].created, null, createdData));

              case 8:
                return _context.abrupt("return", errorResponse(res, badRequest, notCreated));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", errorResponse(res, badRequest, feedbackExists));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      function feedbackCreation(_x, _x2) {
        return _feedbackCreation.apply(this, arguments);
      }

      return feedbackCreation;
    }()
  }]);
  return FeedbackController;
}();

exports["default"] = FeedbackController;
(0, _defineProperty2["default"])(FeedbackController, "allFeedbacks", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var feedbacks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getAllFeedbacks();

          case 3:
            feedbacks = _context2.sent;
            return _context2.abrupt("return", _responseHandler["default"].successResponse(res, ok, allFeedback, null, feedbacks));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", errorResponse(res, badRequest, error));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(FeedbackController, "deleteFeedbacks", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return deleteFeedback(id);

          case 4:
            return _context3.abrupt("return", _responseHandler["default"].successResponse(res, ok, deleted, null, null));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", errorResponse(res, badRequest, error));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());