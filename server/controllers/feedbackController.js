import FeedbackService from '../services/feedbackServices';
import responseHandlers from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';
import customMessages from '../helpers/customMessages';

const { successResponse, errorResponse } = responseHandlers;
const {
    createFeedback,
    getAllFeedbacks,
    deleteFeedback,
} = FeedbackService;
const {
    allFeedback,
    deleted,
    error,
    notCreated,
    feedbackExists,
} = customMessages;
const {
  badRequest,
  created,
  ok,
} = statusCodes

export default class FeedbackController {

  static async feedbackCreation(req, res) {
    const { sessionUser } = req;
    try {
      const data ={
        createdBy: sessionUser.id,
        feedback: req.body.feedback,
      };
      const createdData = await createFeedback(data);
      if(createFeedback){
        return successResponse(res, created, customMessages.created, null, createdData);
      }
      return errorResponse(res,badRequest,notCreated);
    }
    catch(err){
      return errorResponse(res,badRequest,feedbackExists);          
    }

  }
  static allFeedbacks = async (req, res) => {
    try{
      const feedbacks = await getAllFeedbacks();
      return responseHandlers.successResponse(res, ok, allFeedback, null,feedbacks);
    }
    catch(err){
      return errorResponse(res,badRequest,error); 
    }
  };
  static deleteFeedbacks = async (req, res) => {
    const {id} = req.params;
    try{
      await deleteFeedback(id);
      return responseHandlers.successResponse(res, ok, deleted, null,null);
    }
    catch(err){
      return errorResponse(res,badRequest,error); 
    }
  };

}
