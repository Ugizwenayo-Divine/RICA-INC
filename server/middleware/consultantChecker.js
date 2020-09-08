import StudyServices from '../services/studySupervision';
import DesignServices from '../services/designService';
import responseHandler from '../helpers/responseHandler';
import statusCode from '../helpers/statusCode';
const {
  getDesign,
} = DesignServices;
const {
  getStudySupervision
} = StudyServices;
const {
  errorResponse,
} = responseHandler;
const {
  badRequest,
} = statusCode;

const doesDesignExist = async (req,res,next) => {
  let design;
  const {id} = req.params;
  design = await getDesign(id);
  
  if(design){
    req.design=design.dataValues;
    return next();
  }
  return errorResponse(res,badRequest,'The design does not exist');
}
const doesStudyExist = async (req,res,next) => {
  let study;
  const {id} = req.params;
  study = await getStudySupervision(id);
  if(study){
    req.study=study.dataValues;
    return next();
  }
  return errorResponse(res,badRequest,'The study or supervision does not exist');
}

export default { doesDesignExist,doesStudyExist }