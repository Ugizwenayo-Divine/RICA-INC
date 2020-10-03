"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _announcementService = _interopRequireDefault(require("../services/announcementService"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var getAnnouncement = _announcementService["default"].getAnnouncement,
    AnnouncementExists = _announcementService["default"].AnnouncementExists;
var errorResponse = _responseHandler["default"].errorResponse;
var noannouncements = _customMessages["default"].noannouncements,
    announcementExist = _customMessages["default"].announcementExist;
var badRequest = _statusCode["default"].badRequest;

var doesAnnouncementExist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var announcement, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.params.id) {
              _context.next = 7;
              break;
            }

            id = req.params.id;
            _context.next = 4;
            return getAnnouncement(id);

          case 4:
            announcement = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return AnnouncementExists('title', req.body.title);

          case 9:
            announcement = _context.sent;

          case 10:
            if (!announcement) {
              _context.next = 13;
              break;
            }

            req.announcements = announcement.dataValues;
            return _context.abrupt("return", next());

          case 13:
            return _context.abrupt("return", errorResponse(res, badRequest, noannouncements));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function doesAnnouncementExist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var doesAnnouncementNameExist = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var announced, title;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = req.body.title;
            _context2.next = 3;
            return AnnouncementExists('title', title);

          case 3:
            announced = _context2.sent;

            if (!announced) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", errorResponse(res, badRequest, announcementExist));

          case 6:
            return _context2.abrupt("return", next());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function doesAnnouncementNameExist(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  doesAnnouncementExist: doesAnnouncementExist,
  doesAnnouncementNameExist: doesAnnouncementNameExist
};
exports["default"] = _default;