import { validateFeedback } from '../helpers/validation';
import { displayErrorMessages } from '../helpers/validation';

const feedbackValidation = async (req, res, next) => {
  const { error } = validateFeedback(req.body);
  displayErrorMessages(error, res, next);
};

export default { feedbackValidation };