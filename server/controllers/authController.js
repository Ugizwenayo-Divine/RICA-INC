import _ from 'lodash';
import UserService from '../services/authServices';
import responseHandlers from '../helpers/responseHandler';
import authHelpers from '../helpers/authHelper';
import statusCodes from '../helpers/statusCode';
import customMessages from '../helpers/customMessages';
import TokenServices from '../services/tokenServices';
import { resetMessage, changedMessage } from '../helpers/emailMessage';
import sendMail from '../helpers/email';

const { successResponse, errorResponse, updatedResponse } = responseHandlers;
const {
    saveUser,
    userExists,
    updateType,
    deleteUser,
    findAllUsers,
    updateUserPassword
} = UserService;
const {
    generateToken,
    passwordHasher,
    convertToLowerCase,
    decodeToken
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
  static async sendResetEmail(req, res) {
    const { email } = req.body;
    const {
      intro, instruction, text
    } = resetMessage;
      const users = await userExists('email', email.toLowerCase());
      if (users) {
        const user = users.dataValues;
        const token = await generateToken(user);
        const url = `http://localhost:3001/updatepassword`;
        await sendMail(user.email, user.firstName, intro, instruction, text, url);
        return successResponse(res, statusCodes.ok, customMessages.resetEmail, token);
      }
      return errorResponse(res, statusCodes.forbidden, customMessages.notExistUser);
  }

  static async updatePassword(req, res) {
    const { token } = req.params;
    const { password } = req.body;
    const {
      intro, instruction, text
    } = changedMessage;

    const userDetails = await decodeToken(token);
    const users = await userExists('email', userDetails.email.toLowerCase());
    const user = users.dataValues;
    const hashed = await passwordHasher(password);
    await updateUserPassword(hashed, user.id);
    await sendMail(user.email, user.firstName, intro, instruction, text, '#');
    return updatedResponse(res, statusCodes.ok, customMessages.changed);
  }
  static userLogin = async (req, res) => {
    const { loginUser } = req;
    try{
      const token = await generateToken(loginUser);
      const loggedUser={
        firstName:loginUser.firstName,
        lastName:loginUser.lastName,
        email:loginUser.email,
        type:loginUser.type,
        phoneNumber:loginUser.phoneNumber,
        gender:loginUser.gender
      };
      await createToken(token);
      successResponse(res, ok, customMessages.loginSuccess, token, loggedUser);
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
