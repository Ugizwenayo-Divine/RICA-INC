import bcrypt from 'bcrypt';
import _ from 'lodash';
import Joi from '@hapi/joi';
import { validateSignup, displayErrorMessages, validateLogin, validateRole, validatePassword } from '../helpers/validation';
import userService from '../services/authServices';
import responseHandler from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';
import responseMessage from '../helpers/customMessages';
import authHelpers from '../helpers/authHelper';

const {
  userExists,
} = userService;
const {
  errorResponse,
} = responseHandler;
const {
  forbidden,
} = statusCodes;
const {
  wrongcredentials,
} = responseMessage;
const {
  passwordHasher
} = authHelpers;

const signupValidation = async (req, res, next) => {
  const { error } = validateSignup(req.body);
  displayErrorMessages(error, res, next);
};

const loginValidation = async (req, res, next) => {
  const { error } = validateLogin(req.body);
  displayErrorMessages(error, res, next);
};

const checkUserExistance = async (req,res,next) => {

    const checkUser = await userExists('email',req.body.email);
    if (checkUser){
      const { dataValues } = checkUser;
      const password = await bcrypt.compare(req.body.password, dataValues.password);
      if(!password){
        return errorResponse(res, forbidden, wrongcredentials);
      }
      req.loginUser = _.omit(dataValues,'password');
      return next();
    }
    return errorResponse(res, forbidden, wrongcredentials);
}
const roleValidation = async (req, res, next) => {
  const { error } = validateRole(req.body);
  displayErrorMessages(error, res, next);
};
const passwordValidation = async (req, res, next) => {
  const { error } = validatePassword(req.body);
  if (error) {
    return errorResponse(res, statusCodes.badRequest, responseMessage.invalidPassword);
  }
  return next();
};
const validateResetEmail = (req, res, next) => {
  const email = req.body;
  const schema = Joi.object({
    email: Joi.string().trim().email().required()
  });
  const { error } = schema.validate(email, {
    abortEarly: false
  });
  if (error) {
    return errorResponse(res, statusCodes.badRequest, responseMessage.invalidEmail);
  }
  next();
};
export default { 
  signupValidation, 
  checkUserExistance, 
  loginValidation, 
  roleValidation,
  passwordValidation,
  validateResetEmail,
};
