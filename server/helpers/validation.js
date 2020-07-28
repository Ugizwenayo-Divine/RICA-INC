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
invalidUsername,
} = customMessages;


const { errorResponse } = responseHandlers;
const { badRequest } = statusCodes;

const validationMethods = (pattern, messages) => {
  const methods = Joi.string()
      .regex(pattern)
      .trim()
      .required()
      .messages(messages);
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
      firstName: validationMethods(/^([a-zA-Z]{3,})+$/, { 'string.pattern.base': `${invalidFirstname}` }),
      lastName: validationMethods(/^([a-zA-Z]{3,})+$/, { 'string.pattern.base': `${invalidLastname}` }),
      userName: validationMethods(/^([a-zA-Z0-9@_.-]{3,})+$/, { 'string.pattern.base': `${invalidUsername}` }),
      email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { 'string.pattern.base': `${invalidEmail}` }),
      password: validationMethods(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{8,}$/, { 'string.pattern.base': `${invalidPassword}` }),
      gender: validationMethods(/^Male$|^male$|^Female$|^female$/, { 'string.pattern.base': `${invalidGender}` }),
      phoneNumber: validationMethods(/^(078)([0-9]{7})$/, { 'string.pattern.base': `${invalidPhoneNumber}` }),
    });
    return schema.validate(user, {
      abortEarly: false,
      allowUnknown: true
    });
  };

  export {
      displayErrorMessages,
      validateSignup
  }