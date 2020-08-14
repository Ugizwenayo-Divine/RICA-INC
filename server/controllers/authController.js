import _ from 'lodash';
import UserService from '../services/authServices';
import responseHandlers from '../helpers/responseHandler';
import authHelpers from '../helpers/authHelper';
import statusCodes from '../helpers/statusCode';
import customMessages from '../helpers/customMessages';
import TokenServices from '../services/tokenServices';

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
const {
  createToken,
  deleteToken,
} = TokenServices;

export default class AuthenticationController {

  static async signUp(req, res) {
    const payload = req.body;
    const { email } = req.body;
    try{
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
      await createToken(token);
      return successResponse(res, created, userSignupSuccess, token);
    }
    catch(err){
      errorResponse(res, badRequest, err.message);
    } 
  }
  static userLogin = async (req, res) => {
    const { loginUser } = req;
    try{
      const token = await generateToken(loginUser);
      await createToken(token);
      successResponse(res, ok, customMessages.loginSuccess, token);
    }
    catch(err){
      errorResponse(res, badRequest, 'you are already logged in');
    }
  };
  static updateUserType = async (req, res) => {
    const { email, type } = req.body;
    try{
    const userExist = await userExists('email', email.toLowerCase());
    if (userExist.dataValues.type === type) {
        return responseHandlers.errorResponse(res, badRequest, sameType);
    }
    await updateType(req.body);
    return responseHandlers.successResponse(res, ok, typeAssigned);
    }
    catch(err){
      errorResponse(res, badRequest, err.message);
    }
  };
  static userDeletion = async (req, res) => {
    const { id } = req.params;
    const data ={
      id,
    }
    try{
      await deleteUser(data);
      return responseHandlers.successResponse(res, ok, deleted);
    }
    catch(err){
      errorResponse(res, badRequest, 'You are not logged in');
    }
  };
  static allUsers = async (req, res) => {
    try{
      const users = await findAllUsers();
      return responseHandlers.successResponse(res, ok, allUsers, null,users);
    }
    catch(err){
      errorResponse(res, badRequest, err.message);  
    }
  };
  static userLogout = async (req, res) => {
    let token = req.get('authorization');
    try{
      await deleteToken(token);
      return responseHandlers.successResponse(res, ok, 'successful logged out');
    }
    catch(err){
      errorResponse(res, badRequest, err.message);
    }
  };

}
