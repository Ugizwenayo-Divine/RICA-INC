import express from 'express';
import authController from '../../controllers/authController';
import signupValidation from '../../middleware/authValidation';

const {signUp} = authController;
const authenticationRouter = express.Router();

authenticationRouter.post('/signup', signupValidation, signUp);

export default authenticationRouter;
