"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validation = require("../helpers/validation");

var createNewsValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _validateNews, error;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _validateNews = (0, _validation.validateNews)(req.body), error = _validateNews.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNewsValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var updateNewsValidation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var news, keys, title, description, data, _validateNews2, error;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            news = req.news;
            keys = Object.keys(req.body);
            title = keys.find(function (key) {
              return key == 'title';
            });
            description = keys.find(function (key) {
              return key == 'description';
            });
            data = {
              title: title ? req.body.title : news.title,
              description: description ? req.body.description : news.description
            };
            _validateNews2 = (0, _validation.validateNews)(data), error = _validateNews2.error;
            (0, _validation.displayErrorMessages)(error, res, next);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateNewsValidation(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  createNewsValidation: createNewsValidation,
  updateNewsValidation: updateNewsValidation
};
exports["default"] = _default;