"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateConsultant = exports.validateAnySearch = exports.validateRefundStatus = exports.validateRefund = exports.validateBestProduct = exports.validateAddProductQuantity = exports.validateOrder = exports.validateAnnouncement = exports.validateFeedback = exports.validateAdvertisement = exports.validateSearchCategory = exports.validateSearchName = exports.validateProducts = exports.validateNews = exports.validateRole = exports.validateLogin = exports.validateSignup = exports.displayErrorMessages = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _lodash = _interopRequireDefault(require("lodash"));

var _responseHandler = _interopRequireDefault(require("./responseHandler"));

var _statusCode = _interopRequireDefault(require("./statusCode"));

var _customMessages = _interopRequireDefault(require("./customMessages"));

var invalidPhoneNumber = _customMessages["default"].invalidPhoneNumber,
    invalidEmail = _customMessages["default"].invalidEmail,
    invalidFirstname = _customMessages["default"].invalidFirstname,
    invalidGender = _customMessages["default"].invalidGender,
    invalidLastname = _customMessages["default"].invalidLastname,
    invalidPassword = _customMessages["default"].invalidPassword,
    invalidType = _customMessages["default"].invalidType,
    invalidDescription = _customMessages["default"].invalidDescription,
    invalidStatus = _customMessages["default"].invalidStatus,
    invalidTitle = _customMessages["default"].invalidTitle,
    invalidName = _customMessages["default"].invalidName,
    invalidCategory = _customMessages["default"].invalidCategory,
    invalidPrice = _customMessages["default"].invalidPrice,
    invalidBrand = _customMessages["default"].invalidBrand,
    invalidAdverType = _customMessages["default"].invalidAdverType,
    invalidAdvertCompany = _customMessages["default"].invalidAdvertCompany,
    invalidAnnouncement = _customMessages["default"].invalidAnnouncement,
    orderOption = _customMessages["default"].orderOption,
    invalidQuantity = _customMessages["default"].invalidQuantity;
var errorResponse = _responseHandler["default"].errorResponse;
var badRequest = _statusCode["default"].badRequest;

var validationMethods = function validationMethods(pattern, messages) {
  var methods = _joi["default"].string().regex(pattern).trim().required().messages(messages);

  return methods;
};

var displayErrorMessages = function displayErrorMessages(error, res, next) {
  if (error) {
    var details = error.details;
    var messages = details.map(function (err) {
      return err.message.replace(/['"]/g, '');
    }).join(', ');
    return errorResponse(res, badRequest, messages);
  }

  return next();
};

exports.displayErrorMessages = displayErrorMessages;

var validateSignup = function validateSignup(user) {
  var schema = _joi["default"].object({
    firstName: validationMethods(/^(.{3,})+$/, {
      'string.pattern.base': "".concat(invalidFirstname)
    }),
    lastName: validationMethods(/^(.{3,})+$/, {
      'string.pattern.base': "".concat(invalidLastname)
    }),
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': "".concat(invalidEmail)
    }),
    password: validationMethods(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{8,}$/, {
      'string.pattern.base': "".concat(invalidPassword)
    }),
    gender: validationMethods(/^Male$|^male$|^Female$|^female$/, {
      'string.pattern.base': "".concat(invalidGender)
    }),
    phoneNumber: validationMethods(/^(078)([0-9]{7})$/, {
      'string.pattern.base': "".concat(invalidPhoneNumber)
    })
  });

  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateSignup = validateSignup;

var validateLogin = function validateLogin(user) {
  var schema = _joi["default"].object({
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': "".concat(invalidEmail)
    }),
    password: validationMethods(/^/, {
      'string.pattern.base': "".concat(invalidPassword)
    })
  });

  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateLogin = validateLogin;

var validateRole = function validateRole(data) {
  var schema = _joi["default"].object({
    type: validationMethods(/^client$|^Client$|^admin$|^Admin$/, {
      'string.pattern.base': "".concat(invalidType)
    }),
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': "".concat(invalidEmail)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateRole = validateRole;

var validateNews = function validateNews(data) {
  var schema = _joi["default"].object({
    title: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': invalidTitle
    }),
    description: validationMethods(/([\s\S]*)/, {
      'string.pattern.base': invalidDescription
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateNews = validateNews;

var validateProducts = function validateProducts(data) {
  var schema = _joi["default"].object({
    name: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': "".concat(invalidName)
    }),
    category: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': "".concat(invalidCategory)
    }),
    price: validationMethods(/^\d+(?:[.,]\d+)*$/, {
      'string.pattern.base': "".concat(invalidPrice)
    }),
    quantity: validationMethods(/^\d+$/, {
      'string.pattern.base': "".concat(invalidQuantity)
    }),
    brand: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': "".concat(invalidBrand)
    }),
    due_time: validationMethods(/^\d+$/, {
      'string.pattern.base': "due time must be a number"
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateProducts = validateProducts;

var validateSearchName = function validateSearchName(data) {
  var schema = _joi["default"].object({
    name: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': "".concat(invalidName)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateSearchName = validateSearchName;

var validateSearchCategory = function validateSearchCategory(data) {
  var schema = _joi["default"].object({
    category: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': "".concat(invalidName)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateSearchCategory = validateSearchCategory;

var validateAdvertisement = function validateAdvertisement(data) {
  var schema = _joi["default"].object({
    title: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': invalidTitle
    }),
    description: validationMethods(/([\s\S]*)/, {
      'string.pattern.base': invalidDescription
    }),
    type: validationMethods(/^internal$|^Internal$|^external$|^External$/, {
      'string.pattern.base': "".concat(invalidAdverType)
    }),
    advertisingCompany: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': invalidAdvertCompany
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateAdvertisement = validateAdvertisement;

var validateFeedback = function validateFeedback(data) {
  var schema = _joi["default"].object({
    feedback: validationMethods(/([\s\S]*)/, {
      'string.pattern.base': invalidDescription
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateFeedback = validateFeedback;

var validateAnnouncement = function validateAnnouncement(data) {
  var schema = _joi["default"].object({
    title: validationMethods(/^(.{1,})+$/, {
      'string.pattern.base': "".concat(invalidTitle)
    }),
    announcement: validationMethods(/([\s\S]*)/, {
      'string.pattern.base': "".concat(invalidAnnouncement)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateAnnouncement = validateAnnouncement;

var validateOrder = function validateOrder(data) {
  var schema = _joi["default"].object({
    quantity: validationMethods(/^\d+$/, {
      'string.pattern.base': "".concat(invalidQuantity)
    }),
    payment_options: validationMethods(/^card$|^momo$/, {
      'string.pattern.base': "".concat(orderOption)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateOrder = validateOrder;

var validateRefund = function validateRefund(data) {
  var schema = _joi["default"].object({
    description: validationMethods(/([\s\S]*)/, {
      'string.pattern.base': "".concat(invalidDescription)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateRefund = validateRefund;

var validateAddProductQuantity = function validateAddProductQuantity(data) {
  var schema = _joi["default"].object({
    quantity: validationMethods(/^\d+$/, {
      'string.pattern.base': "".concat(invalidQuantity)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateAddProductQuantity = validateAddProductQuantity;

var validateBestProduct = function validateBestProduct(data) {
  var schema = _joi["default"].object({
    type: validationMethods(/^normal$|^best$/, {
      'string.pattern.base': "invalid type, it must be normal or best"
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateBestProduct = validateBestProduct;

var validateRefundStatus = function validateRefundStatus(data) {
  var schema = _joi["default"].object({
    status: validationMethods(/^pendingl$|^approved$|^rejected$/, {
      'string.pattern.base': "".concat(invalidStatus)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateRefundStatus = validateRefundStatus;

var validateAnySearch = function validateAnySearch(data) {
  var schema = _joi["default"].object({
    search: validationMethods(/^(.{3,})+$/, {
      'string.pattern.base': "".concat(invalidName)
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateAnySearch = validateAnySearch;

var validateConsultant = function validateConsultant(data) {
  console.log(data, 'datatt');

  var schema = _joi["default"].object({
    description: validationMethods(/([\s\S]*)/, {
      'string.pattern.base': invalidDescription
    })
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true
  });
};

exports.validateConsultant = validateConsultant;