"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var sendSMS = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(number, message) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _axios["default"].post('https://portal.bulkgate.com/api/1.0/simple/transactional', {
              'application_id': process.env.SEND_SMS_ID,
              'application_token': process.env.SEND_SMS_TOKEN,
              'number': number,
              'text': message,
              'sender_id': 'gText',
              'sender_id_value': 'Rica'
            }).then(function (resp) {
              return console.log(resp.data);
            })["catch"](console.log);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendSMS(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  sendSMS: sendSMS
};
exports["default"] = _default;