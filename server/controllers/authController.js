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
    updateType,
    deleteUser,
    findAllUsers,
} = UserService;
const {
    generateToken,
    passwordHasher,
    convertToLowerCase
} = authHelpers;
const {
alreadyExistEmailOrUsername,
userSignupSuccess,
sameType,
typeAssigned,
deleted,
allUsers,
} = customMessages;
const {
  conflict,
  badRequest,
  created,
  ok,
} = statusCodes

export default class AuthenticationController {

  static async signUp(req, res) {
    const payload = req.body;
    const { email } = req.body;
    const checkEmail = await userExists('email', email.toLowerCase());
    if (checkEmail) {
      return errorResponse(res, conflict, alreadyExistEmailOrUsername);
    }
    const password = await passwordHasher(payload.password);
    const dataWithoutPassword = _.omit(payload, 'password');
    const userData = { ...dataWithoutPassword, password };
    userData.email= convertToLowerCase(userData.email);
    const savedUser = await saveUser(userData);
    const savedUserObject = _.omit(savedUser, 'password');
    const token = await generateToken(savedUserObject);
    return successResponse(res, created, userSignupSuccess, token);
  }
  static userLogin = async (req, res) => {
    const { loginUser } = req;
    const token = await generateToken(loginUser);
    successResponse(res, ok, customMessages.loginSuccess, token);
  };
  static updateUserType = async (req, res) => {
    const { email, type } = req.body;
    const userExist = await userExists('email', email.toLowerCase());
    if (userExist.dataValues.type === type) {
        return responseHandlers.errorResponse(res, badRequest, sameType);
    }
    await updateType(req.body);
    return responseHandlers.successResponse(res, ok, typeAssigned);
  };
  static userDeletion = async (req, res) => {
    const { id } = req.params;
    const data ={
      id,
    }
    await deleteUser(data);
    return responseHandlers.successResponse(res, ok, deleted);
  };
  static allUsers = async (req, res) => {
    const users = await findAllUsers();
    return responseHandlers.successResponse(res, ok, allUsers, null,users);
  };

}
