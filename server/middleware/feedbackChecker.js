import FeedbackServices from '../services/feedbackServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
const {
    feedbackExists,
} = FeedbackServices;
const {
    errorResponse,
} = responseHandler;
const {
  feedbackNotExist
} = responseMessage;
const {
    badRequest,
} = statusCode;

const doesFeedbackExist = async (req,res,next) => {
    let feedback;
    const {id} = req.params;
    try{
      feedback = await feedbackExists('id',id);
      if(feedback){
          return next();
      }
      return errorResponse(res,badRequest, feedbackNotExist);
    }
    catch(error){
      return errorResponse(res,badRequest,error.message);
    }
}

export default { doesFeedbackExist }