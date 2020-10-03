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

var _bonusServices = _interopRequireDefault(require("../services/bonusServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var successResponse = _responseHandler["default"].successResponse,
    errorResponse = _responseHandler["default"].errorResponse;
var createBonus = _bonusServices["default"].createBonus,
    deleteBonus = _bonusServices["default"].deleteBonus,
    getAllBonus = _bonusServices["default"].getAllBonus,
    bonusExists = _bonusServices["default"].bonusExists;
var badRequest = _statusCode["default"].badRequest,
    created = _statusCode["default"].created,
    ok = _statusCode["default"].ok;

var BonusController = /*#__PURE__*/function () {
  function BonusController() {
    (0, _classCallCheck2["default"])(this, BonusController);
  }

  (0, _createClass2["default"])(BonusController, null, [{
    key: "bonusCreation",
    value: function () {
      var _bonusCreation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var data, findBonus, createdData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                data = {
                  name: req.body.name
                };
                _context.next = 4;
                return bonusExists('name', req.body.name);

              case 4:
                findBonus = _context.sent;

                if (findBonus) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return createBonus(data);

              case 8:
                createdData = _context.sent;

                if (!createdData) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", successResponse(res, created, 'Created successfull', null, createdData));

              case 11:
                return _context.abrupt("return", errorResponse(res, badRequest, 'Not created'));

              case 12:
                return _context.abrupt("return", errorResponse(res, badRequest, 'The bonus with that name already exists'));

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", errorResponse(res, badRequest, _context.t0.message));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      function bonusCreation(_x, _x2) {
        return _bonusCreation.apply(this, arguments);
      }

      return bonusCreation;
    }()
  }]);
  return BonusController;
}();

exports["default"] = BonusController;
(0, _defineProperty2["default"])(BonusController, "allBonus", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var bonus;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getAllBonus();

          case 3:
            bonus = _context2.sent;
            return _context2.abrupt("return", _responseHandler["default"].successResponse(res, ok, 'All bonus', null, bonus));

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
(0, _defineProperty2["default"])(BonusController, "deleteBonus", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return deleteBonus(id);

          case 4:
            return _context3.abrupt("return", _responseHandler["default"].successResponse(res, ok, 'Successfully deleted', null, null));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0.message));

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