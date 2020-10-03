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

var _models = _interopRequireDefault(require("../models"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Announcement = _models["default"].Announcement;

var AnnouncementService = /*#__PURE__*/function () {
  function AnnouncementService() {
    (0, _classCallCheck2["default"])(this, AnnouncementService);
  }

  (0, _createClass2["default"])(AnnouncementService, null, [{
    key: "saveAnnouncement",
    value: function () {
      var _saveAnnouncement = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(announcement) {
        var acceptedAnnouncement;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Announcement.create(_objectSpread(_objectSpread({}, announcement), {}, {
                  createdAt: new Date(),
                  updatedAt: new Date()
                }), {
                  fields: ['announcedBy', 'title', 'announcement']
                });

              case 2:
                acceptedAnnouncement = _context.sent;
                return _context.abrupt("return", acceptedAnnouncement);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveAnnouncement(_x) {
        return _saveAnnouncement.apply(this, arguments);
      }

      return saveAnnouncement;
    }()
  }, {
    key: "AnnouncementExists",
    value: function () {
      var _AnnouncementExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(attr, val) {
        var announcement;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Announcement.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                announcement = _context2.sent;
                return _context2.abrupt("return", announcement);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function AnnouncementExists(_x2, _x3) {
        return _AnnouncementExists.apply(this, arguments);
      }

      return AnnouncementExists;
    }()
  }]);
  return AnnouncementService;
}();

(0, _defineProperty2["default"])(AnnouncementService, "getAllAnnouncement", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allAnnouncements;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Announcement.findAll();

        case 2:
          allAnnouncements = _context3.sent;
          return _context3.abrupt("return", allAnnouncements);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(AnnouncementService, "getAnnouncement", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allAnnouncements;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Announcement.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allAnnouncements = _context4.sent;
            return _context4.abrupt("return", allAnnouncements);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AnnouncementService, "deleteAnnouncement", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedAnnouncement;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Announcement.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedAnnouncement = _context5.sent;
            return _context5.abrupt("return", deletedAnnouncement);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(AnnouncementService, "updateAnnouncement", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(newData) {
    var updatedAnnouncement;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Announcement.update({
              title: newData.title,
              announcement: newData.announcement
            }, {
              where: {
                id: newData.id
              }
            });

          case 2:
            updatedAnnouncement = _context6.sent;
            return _context6.abrupt("return", updatedAnnouncement);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = AnnouncementService;
exports["default"] = _default;