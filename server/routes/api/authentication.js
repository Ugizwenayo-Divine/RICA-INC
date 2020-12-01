import express from 'express';
import authController from '../../controllers/authController';
import authMiddlewares from '../../middleware/authValidation';
import userAuthentication from '../../middleware/authentication';

const { 
  signUp,
  userLogin,
  updateUserType,
  userDeletion,
  allUsers,
  userLogout,
  updatePassword,
  sendResetEmail
} = authController;
const {
  isUserAdmin,
  isUserLoggedIn,
  doesUserExist,
  verifyToken
} = userAuthentication;
const {
  loginValidation,
  signupValidation,
  checkUserExistance,
  roleValidation,
  validateResetEmail,
  passwordValidation
} = authMiddlewares;
const authenticationRouter = express.Router();

authenticationRouter.post('/signup', signupValidation, signUp);
authenticationRouter.post('/login', loginValidation, checkUserExistance, userLogin);
authenticationRouter.patch('/update-user',isUserLoggedIn, isUserAdmin, roleValidation, doesUserExist, updateUserType);
authenticationRouter.delete('/delete-user/:id',isUserLoggedIn, isUserAdmin, doesUserExist, userDeletion);
authenticationRouter.get('/all',isUserLoggedIn, isUserAdmin, allUsers);
authenticationRouter.get('/logout',isUserLoggedIn, userLogout);
authenticationRouter.post('/resetpassword', validateResetEmail, sendResetEmail);
authenticationRouter.post('/resetpassword/:token', passwordValidation, verifyToken, updatePassword);

export default authenticationRouter;
