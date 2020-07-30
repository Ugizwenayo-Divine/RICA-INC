import { validateProducts, displayErrorMessages } from '../helpers/validation';

const createProductValidation = async (req, res, next) => {
  const { error } = validateProducts(req.body);
  displayErrorMessages(error, res, next);
};

export default { createProductValidation };
