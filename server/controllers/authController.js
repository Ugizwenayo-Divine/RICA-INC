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
    const { email, userName } = req.body;
    const checkEmail = await userExists('email', email.toLowerCase());
    const checkUsername = await userExists('userName', userName);
    if (checkEmail || checkUsername) {
      return errorResponse(res, statusCodes.conflict, alreadyExistEmailOrUsername);
    }
    const password = await passwordHasher(payload.password);
    const dataWithoutPassword = _.omit(payload, 'password');
    const userData = { ...dataWithoutPassword, password };
    userData.email= convertToLowerCase(userData.email);
    const savedUser = await saveUser(userData);
    const savedUserObject = _.omit(saveUser, 'password');
    const token = await generateToken(savedUserObject);
    return successResponse(res, statusCodes.created, userSignupSuccess, token);
  }

}
