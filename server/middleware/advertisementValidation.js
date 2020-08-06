import { validateAdvertisement, displayErrorMessages } from '../helpers/validation';

const advertisementValidation = async (req, res, next) => {
  const { error } = validateAdvertisement(req.body);
  displayErrorMessages(error, res, next);
};
const updateValidation = async (req, res, next) => {
  const {advertisement} =req;
  let keys = Object.keys(req.body);
  let title = keys.find(key=> key == 'title');
  let description = keys.find(key=> key == 'description');
  let type = keys.find(key => key == 'type');
  let advertisingCompany = keys.find(key => key == 'advertsingCompany');
  const data = {
    title: title ? req.body.title : advertisement.title,
    description: description ? req.body.description : advertisement.description,
    type: type? req.body.type : advertisement.type,
    advertisingCompany: advertisingCompany? req.body.advertisingCompany : advertisement.advertisingCompany,
  }
  const { error } = validateAdvertisement(data);
  displayErrorMessages(error, res, next);
}


export default { advertisementValidation, updateValidation };
