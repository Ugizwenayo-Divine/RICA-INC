import Joi from '@hapi/joi';
import _ from 'lodash';
import responseHandlers from './responseHandler';
import statusCodes from './statusCode';
import customMessages from './customMessages';

const {
  invalidPhoneNumber,
  invalidEmail,
  invalidFirstname,
  invalidGender,
  invalidLastname,
  invalidPassword,
  invalidType,
  invalidDescription,
  invalidTitle,
  invalidName,
  invalidCategory,
  invalidPrice,
  invalidBrand,
  invalidAdverType,
  invalidAdvertCompany,
  invalidAnnouncement,
} = customMessages;

const { errorResponse } = responseHandlers;
const { badRequest } = statusCodes;

const validationMethods = (pattern, messages) => {
  const methods = Joi.string().regex(pattern).trim().required().messages(messages);
  return methods;
};
const displayErrorMessages = (error, res, next) => {
  if (error) {
    const { details } = error;
    const messages = details.map((err) => err.message.replace(/['"]/g, '')).join(', ');
    return errorResponse(res, badRequest, messages);
  }
  return next();
};
const validateSignup = (user) => {
  const schema = Joi.object({
    firstName: validationMethods(/^([a-zA-Z]{3,})+$/, {
      'string.pattern.base': `${invalidFirstname}`,
    }),
    lastName: validationMethods(/^([a-zA-Z]{3,})+$/, {
      'string.pattern.base': `${invalidLastname}`,
    }),
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': `${invalidEmail}`,
    }),
    password: validationMethods(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{8,}$/,
      { 'string.pattern.base': `${invalidPassword}` }
    ),
    gender: validationMethods(/^Male$|^male$|^Female$|^female$/, {
      'string.pattern.base': `${invalidGender}`,
    }),
    phoneNumber: validationMethods(/^(078)([0-9]{7})$/, {
      'string.pattern.base': `${invalidPhoneNumber}`,
    }),
  });
  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateLogin = (user) => {
  const schema = Joi.object({
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': `${invalidEmail}`,
    }),
    password: validationMethods(/^/, { 'string.pattern.base': `${invalidPassword}` }),
  });
  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateRole = (data) => {
  const schema = Joi.object({
    type: validationMethods(/^client$|^Client$|^admin$|^Admin$/, {
      'string.pattern.base': `${invalidType}`,
    }),
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': `${invalidEmail}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateNews = (data) => {
  const schema = Joi.object({
    title: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': invalidTitle,
    }),
    description: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': invalidDescription,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateProducts = (data) => {
  const schema = Joi.object({
    name: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidName}`,
    }),
    category: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidCategory}`,
    }),
    price: validationMethods(/^\d+(?:[.,]\d+)*$/, {
      'string.pattern.base': `${invalidPrice}`,
    }),
    brand: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidBrand}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateSearchName = (data) => {
  const schema = Joi.object({
    name: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidName}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateSearchCategory = (data) => {
  const schema = Joi.object({
    category: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidName}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateAdvertisement = (data) => {
  const schema = Joi.object({
    title: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': invalidTitle,
    }),
    description: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': invalidDescription,
    }),
    type: validationMethods(/^internal$|^Internal$|^external$|^External$/, {
      'string.pattern.base': `${invalidAdverType}`,
    }),
    advertisingCompany: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': invalidAdvertCompany,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateFeedback = (data) => {
  const schema = Joi.object({
    feedback: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': invalidDescription,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateAnnouncement = (data) => {
  const schema = Joi.object({
    title: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidTitle}`,
    }),
    announcement: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidAnnouncement}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};

export {
  displayErrorMessages,
  validateSignup,
  validateLogin,
  validateRole,
  validateNews,
  validateProducts,
  validateSearchName,
  validateSearchCategory,
  validateAdvertisement,
  validateFeedback,
  validateAnnouncement,
};
