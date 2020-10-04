"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _transactionServices = _interopRequireDefault(require("../services/transactionServices"));

_dotenv["default"].config();

var createTransaction = _transactionServices["default"].createTransaction;

var rwn_mobilemoney = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userData, data) {
    var transaction, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return createTransaction(userData);

          case 2:
            transaction = _context.sent;
            result = '';
            _context.next = 6;
            return (0, _nodeFetch["default"])('https://api.flutterwave.com/v3/charges?type=mobile_money_rwanda', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.SECRET_KEY
              },
              body: JSON.stringify({
                "tx_ref": transaction.id,
                "amount": data.amount,
                "currency": data.currency,
                "network": "MTN",
                "email": data.email,
                "phone_number": data.phone_number,
                "fullname": data.fullname,
                // "callback": function (data) { // specified callback function
                //   console.log(data);
                // },
                "redirect_url": "https://ricainc.co.com/displayclientorders"
              })
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return data;
            })["catch"](function (error) {
              return error;
            });

          case 6:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function rwn_mobilemoney(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var verifyPayment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(transactionId) {
    var verified;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            verified = '';
            _context2.next = 3;
            return (0, _nodeFetch["default"])('https://api.flutterwave.com/v3/transactions/' + transactionId + '/verify', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.SECRET_KEY
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return data;
            })["catch"](function (error) {
              return error;
            });

          case 3:
            verified = _context2.sent;
            return _context2.abrupt("return", verified);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function verifyPayment(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var cardPayment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userData, data) {
    var transaction, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return createTransaction(userData);

          case 2:
            transaction = _context3.sent;
            result = '';
            _context3.next = 6;
            return (0, _nodeFetch["default"])('https://api.flutterwave.com/v3/payments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.SECRET_KEY
              },
              body: JSON.stringify({
                "tx_ref": transaction.id,
                "amount": data.amount,
                "currency": data.currency,
                "redirect_url": "https://ricainc.co.com/displayclientorders",
                "payment_options": userData.type,
                "meta": {
                  "consumer_id": userData.transactedBy,
                  "consumer_mac": "92a3-912ba-1192a"
                },
                "customer": {
                  "email": data.email,
                  "phonenumber": data.phone_number,
                  "name": data.fullname
                },
                "customizations": {
                  "title": "RICA product Payments",
                  "description": "The RICA product isn't free. Pay the price",
                  "logo": "RICA INC"
                }
              })
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return data;
            })["catch"](function (error) {
              return error;
            });

          case 6:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function cardPayment(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  rwn_mobilemoney: rwn_mobilemoney,
  verifyPayment: verifyPayment,
  cardPayment: cardPayment
};
exports["default"] = _default;