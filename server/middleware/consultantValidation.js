import { validateConsultant, displayErrorMessages } from '../helpers/validation';

const createConsultantValidation = async (req, res, next) => {
  const { error } = validateConsultant(req.body);
  displayErrorMessages(error, res, next);
};
const updateDesignValidation = async (req, res, next) => {
  const {design} =req;
  let keys = Object.keys(req.body);
  let description = keys.find(key=> key == 'description');
  const data = {
    description: description ? req.body.description : design.description,
  }
  const { error } = validateConsultant(data);
  displayErrorMessages(error, res, next);
}
const updateStudyValidation = async (req, res, next) => {
    const {study} =req;
    let keys = Object.keys(req.body);
    let description = keys.find(key=> key == 'description');
    const data = {
      description: description ? req.body.description : study.description,
    }
    const { error } = validateConsultant(data);
    displayErrorMessages(error, res, next);
  }


export default { createConsultantValidation, updateDesignValidation,updateStudyValidation };
