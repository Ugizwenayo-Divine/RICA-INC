"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validation = require("../helpers/validation");

var createAnnouncementValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateAnnouncement, error;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateAnnouncement = (0, _validation.validateAnnouncement)(req.body), error = _validateAnnouncement.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createAnnouncementValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var updateAnnouncementValidation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var announcements, keys, title, announcement, data, _validateAnnouncement2, error;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            announcements = req.announcements;
            keys = Object.keys(req.body);
            title = keys.find(function (key) {
              return key == 'title';
            });
            announcement = keys.find(function (key) {
              return key == 'announcement';
            });
            data = {
              title: title ? req.body.title : announcements.title,
              announcement: announcement ? req.body.announcement : announcements.announcement
            };
            _validateAnnouncement2 = (0, _validation.validateAnnouncement)(data), error = _validateAnnouncement2.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateAnnouncementValidation(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  createAnnouncementValidation: createAnnouncementValidation,
  updateAnnouncementValidation: updateAnnouncementValidation
};
exports["default"] = _default;