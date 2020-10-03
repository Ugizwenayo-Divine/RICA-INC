"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var successResponse = function successResponse(res, code, message, token) {
  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  return res.status(code).json({
    message: message,
    token: token,
    data: data
  });
};

var errorResponse = function errorResponse(res, code, error) {
  return res.status(code).json({
    error: error
  });
};

var _default = {
  successResponse: successResponse,
  errorResponse: errorResponse
};
exports["default"] = _default;