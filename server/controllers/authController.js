import _ from 'lodash';
import UserService from '../services/authServices';
import responseHandlers from '../helpers/responseHandler';
import authHelpers from '../helpers/authHelper';
import statusCodes from '../helpers/statusCode';
import customMessages from '../helpers/customMessages';

const { successResponse, errorResponse } = responseHandlers;
const {
    saveUser,
    userExists,
} = UserService;
const {
    generateToken,
    passwordHasher,
    convertToLowerCase
} = authHelpers;
const {
alreadyExistEmailOrUsername,
userSignupSuccess
} = customMessages;

export default class AuthenticationController {

  static async signUp(req, res) {
    const payload = req.body;
    const { email } = req.body;
    const checkEmail = await userExists('email', email.toLowerCase());
    if (checkEmail) {
      return errorResponse(res, statusCodes.conflict, alreadyExistEmailOrUsername);
    }
    const password = await passwordHasher(payload.password);
    const dataWithoutPassword = _.omit(payload, 'password');
    const userData = { ...dataWithoutPassword, password };
    userData.email= convertToLowerCase(userData.email);
    const savedUser = await saveUser(userData);
    const savedUserObject = _.omit(savedUser, 'password');
    const token = await generateToken(savedUserObject);
    return successResponse(res, statusCodes.created, userSignupSuccess, token);
  }
  static userLogin = async (req, res) => {
    const { loginUser } = req;
    const token = await generateToken(loginUser);
    successResponse(res, statusCodes.ok, customMessages.loginSuccess, token);
  };

}
