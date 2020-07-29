import { validateSignup, displayErrorMessages } from '../helpers/validation';

const signupValidation = async (req, res, next) => {
    const { error } = validateSignup(req.body);
    displayErrorMessages(error, res, next);
  };

export default signupValidation;