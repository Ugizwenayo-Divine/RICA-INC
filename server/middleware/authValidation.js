import bcrypt from 'bcrypt';
import { validateSignup, displayErrorMessages, validateLogin } from '../helpers/validation';
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
      req.loginUser = req.body;
      return next();
    }
    return errorResponse(res, forbidden, wrongcredentials);

}

export default { signupValidation, checkUserExistance, loginValidation };