import { validateOrder, displayErrorMessages } from '../helpers/validation';

const orderValidation = async (req, res, next) => {
  const { error } = validateOrder(req.body);
  displayErrorMessages(error, res, next);
};

export default { orderValidation };
