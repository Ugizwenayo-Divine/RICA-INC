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

var _announcementService = _interopRequireDefault(require("../services/announcementService"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var error = _customMessages["default"].error,
    allAnnouncements = _customMessages["default"].allAnnouncements,
    announcements = _customMessages["default"].announcements,
    deleted = _customMessages["default"].deleted;
var badRequest = _statusCode["default"].badRequest,
    ok = _statusCode["default"].ok;

var AnnouncementController = /*#__PURE__*/function () {
  function AnnouncementController() {
    (0, _classCallCheck2["default"])(this, AnnouncementController);
  }

  (0, _createClass2["default"])(AnnouncementController, null, [{
    key: "addAnnouncement",
    value: function () {
      var _addAnnouncement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var sessionUser, id, _req$body, title, announcement, datas;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionUser = req.sessionUser;
                id = sessionUser.id;
                _context.prev = 2;
                _req$body = req.body, title = _req$body.title, announcement = _req$body.announcement;
                _context.next = 6;
                return _announcementService["default"].saveAnnouncement({
                  announcedBy: id,
                  title: title,
                  announcement: announcement
                });

              case 6:
                datas = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'Announcement Successfully Added',
                  data: {
                    title: datas.title,
                    announcement: datas.announcement,
                    createdAt: datas.createdAt,
                    updatedAt: datas.updatedAt
                  }
                }));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  message: _context.t0.message
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function addAnnouncement(_x, _x2) {
        return _addAnnouncement.apply(this, arguments);
      }

      return addAnnouncement;
    }()
  }]);
  return AnnouncementController;
}();

(0, _defineProperty2["default"])(AnnouncementController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _announcements;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _announcementService["default"].getAllAnnouncement();

          case 3:
            _announcements = _context2.sent;
            return _context2.abrupt("return", successResponse(res, ok, allAnnouncements, null, _announcements));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0));

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
(0, _defineProperty2["default"])(AnnouncementController, "getOneAnnouncement", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, oneAnnouncement;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _announcementService["default"].getAnnouncement(id);

          case 4:
            oneAnnouncement = _context3.sent;
            return _context3.abrupt("return", successResponse(res, ok, announcements, null, oneAnnouncement));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", errorResponse(res, badRequest, _context3.t0));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AnnouncementController, "delete", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _announcementService["default"].deleteAnnouncement(id);

          case 4:
            return _context4.abrupt("return", successResponse(res, ok, deleted, null, null));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", errorResponse(res, badRequest, error));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AnnouncementController, "AnnouncementUpdation", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _announcements2, newData;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _announcements2 = req.announcements;
            newData = {
              id: id,
              title: req.body.title || _announcements2.title,
              announcement: req.body.announcement || _announcements2.announcement
            };
            _context5.next = 6;
            return _announcementService["default"].updateAnnouncement(newData);

          case 6:
            return _context5.abrupt("return", successResponse(res, ok, 'updated', null, null));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, error));

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function (_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AnnouncementController, "getOneTitle", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var title, oneAnnouncement;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            title = req.query.title;
            _context6.next = 4;
            return _announcementService["default"].AnnouncementExists('title', title);

          case 4:
            oneAnnouncement = _context6.sent;

            if (!oneAnnouncement) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", successResponse(res, ok, announcements, null, oneAnnouncement));

          case 7:
            return _context6.abrupt("return", errorResponse(res, badRequest, 'The announcement does not exist'));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", errorResponse(res, badRequest, _context6.t0));

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function (_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = AnnouncementController;
exports["default"] = _default;