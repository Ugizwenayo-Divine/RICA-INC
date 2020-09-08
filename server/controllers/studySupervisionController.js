import StudySupervisionServices from '../services/studySupervision';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import uploadTheImage from '../helpers/uploadImage';

const {
  createStudySupervision,
  getAllStudySupervision,
  getStudySupervision,
  deleteStudySupervision,
  updateStudySupervision,
} = StudySupervisionServices;
const {
  errorResponse,
  successResponse,
} = responseHandler;
const {
  error,
  successCreation,
  wrongType,
  selectImage,
  deleted,
} = responseMessage;
const {
  badRequest,
  created,
  unAuthorized,
  unSupportedMedia,
  ok,
} = statusCode;

class StudySupervisionController {
  static addStudySupervision = async (req,res) => {
    console.log('here22');
    const {sessionUser} = req;
    const {id} = sessionUser;
    const { description } = req.body;

    try{
      if (req.files && req.files.image) {
        let image;
        if (req.files.image.type || req.files.image.length) {
          image = await uploadTheImage.uploader(req.files.image);
        } else {
          return errorResponse(res, badRequest, selectImage);
        }

        if (!image.url || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        } else null;
        console.log('user',id);
        const data = {
          studyBy:id,
          description,
          image:image.url,
          cloudinaryId:image.public_id,
        }
        const result = await createStudySupervision(data);
        console.log(result,'llll');
        return successResponse(res,created,successCreation,null,result);
      }
      return errorResponse(res, unAuthorized, selectImage);

    }
    catch(err){
      console.log('addd',err);
      return errorResponse(res,badRequest,error);
    }
  }
  static getAll = async (req, res) => {
    try{
      const studySupervision = await getAllStudySupervision();
      return successResponse(res, ok, 'All available studySupervisions', null, studySupervision);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneStudySupervision = async (req, res) => {
    try{
      const {id} = req.params;
      const oneStudySupervision = await getStudySupervision(id);
      return successResponse(res, ok, 'The requested studySupervision', null, oneStudySupervision);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static deleteOneStudySupervision = async (req, res) => {
    try{
      const {id} = req.params;
      const {study} = req;
      await uploadTheImage.deleteTheImage(study.cloudinaryId);
      await deleteStudySupervision(id);
      return successResponse(res, ok, deleted, null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static studySupervisionUpdation = async (req, res) => {
    let image;
    try{
      const {id} = req.params;
      let imageUrl=null,imageId=null;
      const {study} = req;
      
      if (req.files && req.files.image){

        await uploadTheImage.deleteTheImage(study.cloudinaryId);
        image = await uploadTheImage.uploader(req.files.image);
        if (!image || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        }
        const {url, public_id} = image;
        imageUrl = url;
        imageId = public_id;
      }
      const newData = {
        id,
        description: req.body.description || study.description,
        image: imageUrl || study.image,
        cloudinaryId: imageId || study.cloudinaryId,
      }
      await updateStudySupervision(newData);
      return successResponse(res, ok, 'updated', null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
}

export default StudySupervisionController;