import express from 'express';
import authController from '../../controllers/authController';
import authMiddlewares from '../../middleware/authValidation';

const { 
    signUp,
    userLogin, 
} = authController;
const {
    loginValidation,
    signupValidation,
    checkUserExistance,
} = authMiddlewares;
const authenticationRouter = express.Router();

authenticationRouter.post('/signup', signupValidation, signUp);
authenticationRouter.post('/login', loginValidation, checkUserExistance, userLogin);

export default authenticationRouter;
