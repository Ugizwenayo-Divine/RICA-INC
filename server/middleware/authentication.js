import responseHandler from '../helpers/responseHandler';
import authHelpers from '../helpers/authHelper';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import userService from '../services/authServices';
import TokenServices from '../services/tokenServices';

const { errorResponse } = responseHandler;
const { decodeToken } = authHelpers;
const { tokenInvalid, tokenMissing, notAllowed, notUserExist } = responseMessage;
const { userExists } = userService;
const { badRequest, unAuthorized } = statusCode;
const {
  getToken,
} = TokenServices;

const isUserLoggedIn = async (req, res, next) => {
  let token = req.get('authorization');
  if (!token) {
    return errorResponse(res, badRequest, tokenMissing);
  }
  try {
    const checkToken = await getToken(token);
    if(checkToken){
      const decodedToken = await decodeToken(token);
      const user = await userExists('email', decodedToken.email);
      if (!user) {
        return errorResponse(res, unAuthorized, notAllowed);
      }
      req.sessionUser = decodedToken;
      return next();
    }
    return errorResponse(res, badRequest, 'You are not logged in, login first!!!');
  } catch (error) {
    return errorResponse(res, badRequest, tokenInvalid);
  }
};

const isUserAdmin = async (req, res, next) => {
  const { sessionUser } = req;
  const user = await userExists('email', sessionUser.email);
  const { dataValues } = user;
  if (dataValues.type != 'admin') {
    return errorResponse(res, unAuthorized, notAllowed);
  }
  return next();
};

const doesUserExist = async (req, res, next) => {
  let user;
  if (req.params.id) {
    const { id } = req.params;
    user = await userExists('id', id);
  } else {
    const { email } = req.body;
    user = await userExists('email', email);
  }

  if (!user) {
    return errorResponse(res, unAuthorized, notUserExist);
  }
  return next();
};

export default { isUserLoggedIn, isUserAdmin, doesUserExist };
