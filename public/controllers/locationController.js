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

var _locationServices = _interopRequireDefault(require("../services/locationServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var successResponse = _responseHandler["default"].successResponse,
    errorResponse = _responseHandler["default"].errorResponse;
var badRequest = _statusCode["default"].badRequest,
    ok = _statusCode["default"].ok;
var getAllDistricts = _locationServices["default"].getAllDistricts,
    updateDistrict = _locationServices["default"].updateDistrict,
    getDistrictSectorS = _locationServices["default"].getDistrictSectorS,
    getAllSectors = _locationServices["default"].getAllSectors;

var FeedbackController = /*#__PURE__*/function () {
  function FeedbackController() {
    (0, _classCallCheck2["default"])(this, FeedbackController);
  }

  (0, _createClass2["default"])(FeedbackController, null, [{
    key: "updateTransportPrice",
    value: function () {
      var _updateTransportPrice = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                data = {
                  district: req.params.name,
                  price: req.body.price
                };
                _context.next = 4;
                return updateDistrict(data);

              case 4:
                return _context.abrupt("return", successResponse(res, ok, 'Updated', null, null));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", errorResponse(res, badRequest, _context.t0.message));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function updateTransportPrice(_x, _x2) {
        return _updateTransportPrice.apply(this, arguments);
      }

      return updateTransportPrice;
    }()
  }]);
  return FeedbackController;
}();

exports["default"] = FeedbackController;
(0, _defineProperty2["default"])(FeedbackController, "allDistricts", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var districts;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getAllDistricts();

          case 3:
            districts = _context2.sent;
            return _context2.abrupt("return", _responseHandler["default"].successResponse(res, ok, 'All districts', null, districts));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0.message));

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
(0, _defineProperty2["default"])(FeedbackController, "allSectors", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var districts;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getAllSectors();

          case 3:
            districts = _context3.sent;
            return _context3.abrupt("return", _responseHandler["default"].successResponse(res, ok, 'All Sectors', null, districts));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0.message));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(FeedbackController, "getSectorsByDistrict", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, locations;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return getDistrictSectorS(id);

          case 4:
            locations = _context4.sent;
            return _context4.abrupt("return", successResponse(res, ok, 'All locations', null, locations));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", errorResponse(res, badRequest, _context4.t0));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());