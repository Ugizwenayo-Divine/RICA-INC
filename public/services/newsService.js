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

var News = _models["default"].News;

var NewsServices = /*#__PURE__*/function () {
  function NewsServices() {
    (0, _classCallCheck2["default"])(this, NewsServices);
  }

  (0, _createClass2["default"])(NewsServices, null, [{
    key: "newsExists",
    value: function () {
      var _newsExists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(attr, val) {
        var news;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return News.findOne({
                  where: (0, _defineProperty2["default"])({}, attr, val)
                });

              case 2:
                news = _context.sent;
                return _context.abrupt("return", news);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function newsExists(_x, _x2) {
        return _newsExists.apply(this, arguments);
      }

      return newsExists;
    }()
  }]);
  return NewsServices;
}();

(0, _defineProperty2["default"])(NewsServices, "createNews", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var _yield$News$create, dataValues;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return News.create(_objectSpread(_objectSpread({}, data), {}, {
              createdAt: new Date(),
              updatedAt: new Date()
            }), {
              fields: ['userId', 'title', 'description', 'image', 'cloudinaryId', 'createdAt', 'updatedAt']
            });

          case 2:
            _yield$News$create = _context2.sent;
            dataValues = _yield$News$create.dataValues;
            return _context2.abrupt("return", dataValues);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(NewsServices, "getAllNews", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var allNews;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return News.findAll();

        case 2:
          allNews = _context3.sent;
          return _context3.abrupt("return", allNews);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
(0, _defineProperty2["default"])(NewsServices, "getNews", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var allNews;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return News.findOne({
              where: {
                id: id
              }
            });

          case 2:
            allNews = _context4.sent;
            return _context4.abrupt("return", allNews);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(NewsServices, "deleteNews", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedNews;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return News.destroy({
              where: {
                id: id
              }
            });

          case 2:
            deletedNews = _context5.sent;
            return _context5.abrupt("return", deletedNews);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(NewsServices, "updateNews", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(newData) {
    var updatedNews;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return News.update({
              title: newData.title,
              description: newData.description,
              image: newData.image,
              cloudinaryId: newData.cloudinaryId
            }, {
              where: {
                id: newData.id
              }
            });

          case 2:
            updatedNews = _context6.sent;
            return _context6.abrupt("return", updatedNews);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x6) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = NewsServices;
exports["default"] = _default;