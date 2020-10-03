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

var _payment = _interopRequireDefault(require("../payment/payment"));

var _productServices = _interopRequireDefault(require("../services/productServices"));

var _ordersServices = _interopRequireDefault(require("../services/ordersServices"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _orderHelper = _interopRequireDefault(require("../helpers/orderHelper"));

var _transactionServices = _interopRequireDefault(require("../services/transactionServices"));

var _statusCode = _interopRequireDefault(require("../helpers/statusCode"));

var _customMessages = _interopRequireDefault(require("../helpers/customMessages"));

var _smsNotification = _interopRequireDefault(require("../helpers/smsNotification"));

var _authServices = _interopRequireDefault(require("../services/authServices"));

var rwn_mobilemoney = _payment["default"].rwn_mobilemoney,
    cardPayment = _payment["default"].cardPayment,
    verifyPayment = _payment["default"].verifyPayment;
var updateProductStatus = _productServices["default"].updateProductStatus;
var getOrders = _ordersServices["default"].getOrders;
var errorResponse = _responseHandler["default"].errorResponse,
    successResponse = _responseHandler["default"].successResponse;
var clientOrderPayed = _orderHelper["default"].clientOrderPayed;
var getTransaction = _transactionServices["default"].getTransaction,
    updateStatus = _transactionServices["default"].updateStatus,
    getAllTransactions = _transactionServices["default"].getAllTransactions;
var badRequest = _statusCode["default"].badRequest,
    ok = _statusCode["default"].ok;
var allTransactions = _customMessages["default"].allTransactions,
    paymentDone = _customMessages["default"].paymentDone,
    paymentInitiated = _customMessages["default"].paymentInitiated,
    paymentInitiatedError = _customMessages["default"].paymentInitiatedError,
    paymentError = _customMessages["default"].paymentError,
    transactionNotExist = _customMessages["default"].transactionNotExist;
var sendSMS = _smsNotification["default"].sendSMS;
var findAllUsers = _authServices["default"].findAllUsers;

var PaymentController = /*#__PURE__*/function () {
  function PaymentController() {
    (0, _classCallCheck2["default"])(this, PaymentController);
  }

  (0, _createClass2["default"])(PaymentController, null, [{
    key: "orderPaymentCreation",
    value: function () {
      var _orderPaymentCreation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var sessionUser, id, result, url, order, data, userData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sessionUser = req.sessionUser;
                id = req.params.id;
                result = '';
                url = '';
                _context.prev = 4;
                _context.next = 7;
                return getOrders(id);

              case 7:
                order = _context.sent;
                data = {
                  email: sessionUser.email,
                  fullname: sessionUser.firstName + ' ' + sessionUser.lastName,
                  phone_number: sessionUser.phoneNumber,
                  currency: order.dataValues.currency,
                  amount: order.dataValues.amount
                };
                userData = {
                  transactedBy: order.dataValues.orderedBy,
                  order_id: order.dataValues.id,
                  phone_number: sessionUser.phoneNumber,
                  type: order.dataValues.payment_options
                };

                if (!(order.dataValues.payment_options == 'card')) {
                  _context.next = 17;
                  break;
                }

                _context.next = 13;
                return cardPayment(userData, data);

              case 13:
                result = _context.sent;
                url = result.data.link;
                _context.next = 21;
                break;

              case 17:
                _context.next = 19;
                return rwn_mobilemoney(userData, data);

              case 19:
                result = _context.sent;
                url = result.meta.authorization.redirect;

              case 21:
                if (!(result.status == 'success')) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt("return", successResponse(res, ok, paymentInitiated, null, {
                  'redirect': url
                }));

              case 23:
                return _context.abrupt("return", errorResponse(res, badRequest, paymentInitiatedError));

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", errorResponse(res, badRequest, _context.t0.message));

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 26]]);
      }));

      function orderPaymentCreation(_x, _x2) {
        return _orderPaymentCreation.apply(this, arguments);
      }

      return orderPaymentCreation;
    }()
  }, {
    key: "paymentVerification",
    value: function () {
      var _paymentVerification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var transaction_id, result, _result$data, tx_ref, amount, currency, transaction, transactionData, Order;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                transaction_id = req.params.transaction_id;
                _context2.prev = 1;
                _context2.next = 4;
                return verifyPayment(transaction_id);

              case 4:
                result = _context2.sent;
                _result$data = result.data, tx_ref = _result$data.tx_ref, amount = _result$data.amount, currency = _result$data.currency;
                _context2.next = 8;
                return getTransaction(tx_ref);

              case 8:
                transaction = _context2.sent;
                transactionData = {
                  tx_ref: tx_ref,
                  transaction_id: transaction_id
                };

                if (!transaction) {
                  _context2.next = 19;
                  break;
                }

                Order = transaction.dataValues.Order;

                if (!(result.status == 'success' && amount >= Order.dataValues.amount && currency == Order.dataValues.currency)) {
                  _context2.next = 18;
                  break;
                }

                _context2.next = 15;
                return updateStatus(transactionData);

              case 15:
                _context2.next = 17;
                return clientOrderPayed(Order.dataValues.id);

              case 17:
                return _context2.abrupt("return", successResponse(res, ok, paymentDone, null, null));

              case 18:
                return _context2.abrupt("return", errorResponse(res, badRequest, paymentError));

              case 19:
                return _context2.abrupt("return", errorResponse(res, badRequest, transactionNotExist));

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", errorResponse(res, badRequest, _context2.t0.message));

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 22]]);
      }));

      function paymentVerification(_x3, _x4) {
        return _paymentVerification.apply(this, arguments);
      }

      return paymentVerification;
    }()
  }, {
    key: "verification",
    value: function () {
      var _verification = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var transaction_id, result, _result$data2, tx_ref, amount, currency, transaction, transactionData, Order, users;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                transaction_id = '';
                transaction_id = req.body.data.id || req.body.transaction_id;
                _context4.prev = 2;
                _context4.next = 5;
                return verifyPayment(transaction_id);

              case 5:
                result = _context4.sent;
                _result$data2 = result.data, tx_ref = _result$data2.tx_ref, amount = _result$data2.amount, currency = _result$data2.currency;
                _context4.next = 9;
                return getTransaction(tx_ref);

              case 9:
                transaction = _context4.sent;
                transactionData = {
                  tx_ref: tx_ref,
                  transaction_id: transaction_id
                };

                if (!transaction) {
                  _context4.next = 26;
                  break;
                }

                Order = transaction.dataValues.Order;
                _context4.next = 15;
                return findAllUsers();

              case 15:
                users = _context4.sent;

                if (!(result.status == 'success' && amount >= Order.dataValues.amount && currency == Order.dataValues.currency)) {
                  _context4.next = 25;
                  break;
                }

                _context4.next = 19;
                return updateStatus(transactionData);

              case 19:
                _context4.next = 21;
                return clientOrderPayed(Order.dataValues.id);

              case 21:
                users.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(user.type === 'admin')) {
                              _context3.next = 6;
                              break;
                            }

                            _context3.next = 3;
                            return sendSMS(user.phoneNumber, "The payment of ".concat(Order.dataValues.amount, " RWF is made for ").concat(Order.id, " order"));

                          case 3:
                            _context3.t0 = _context3.sent;
                            _context3.next = 7;
                            break;

                          case 6:
                            _context3.t0 = null;

                          case 7:
                            return _context3.abrupt("return", _context3.t0);

                          case 8:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x7) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context4.next = 24;
                return sendSMS(transaction.dataValues.phone_number, "The payment of ".concat(Order.dataValues.amount, " RWF for ").concat(Order.dataValues.product, " from RICA is done"));

              case 24:
                return _context4.abrupt("return", successResponse(res, ok, paymentDone, null, null));

              case 25:
                return _context4.abrupt("return", errorResponse(res, badRequest, paymentError));

              case 26:
                return _context4.abrupt("return", errorResponse(res, badRequest, transactionNotExist));

              case 29:
                _context4.prev = 29;
                _context4.t0 = _context4["catch"](2);
                return _context4.abrupt("return", errorResponse(res, badRequest, _context4.t0.message));

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 29]]);
      }));

      function verification(_x5, _x6) {
        return _verification.apply(this, arguments);
      }

      return verification;
    }()
  }]);
  return PaymentController;
}();

exports["default"] = PaymentController;
(0, _defineProperty2["default"])(PaymentController, "getVerifiedTransactions", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var transactions;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return getAllTransactions();

          case 3:
            transactions = _context5.sent;
            return _context5.abrupt("return", successResponse(res, ok, allTransactions, null, transactions));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", errorResponse(res, badRequest, _context5.t0));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function (_x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(PaymentController, "getPayment", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", successResponse(res, ok, 'success', null, null));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}());