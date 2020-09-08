import DesignServices from '../services/designService';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import uploadTheImage from '../helpers/uploadImage';

const {
  createDesign,
  getAllDesign,
  getDesign,
  deleteDesign,
  updateDesign,
} = DesignServices;
const {
  errorResponse,
  successResponse,
} = responseHandler;
const {
  error,
  successCreation,
  wrongType,
  selectImage,
  allDesign,
  Design,
  deleted,
} = responseMessage;
const {
  badRequest,
  created,
  unAuthorized,
  unSupportedMedia,
  ok,
} = statusCode;

class DesignController {
  static addDesign = async (req,res) => {
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
        const data = {
          designBy:id,
          description,
          image:image.url,
          cloudinaryId:image.public_id,
        }
        const result = await createDesign(data);
        return successResponse(res,created,successCreation,null,result);
      }
      return errorResponse(res, unAuthorized, selectImage);

    }
    catch(err){
      console.log('hhhh',err);
        return errorResponse(res,badRequest,error);
    }
  }
  static getAll = async (req, res) => {
    try{
      const design = await getAllDesign();
      return successResponse(res, ok, 'All available designs', null, design);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneDesign = async (req, res) => {
    try{
      const {id} = req.params;
      const oneDesign = await getDesign(id);
      return successResponse(res, ok, 'The requested design', null, oneDesign);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static deleteOneDesign = async (req, res) => {
    try{
      const {id} = req.params;
      const {design} = req;
      await uploadTheImage.deleteTheImage(design.cloudinaryId);
      await deleteDesign(id);
      return successResponse(res, ok, deleted, null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static designUpdation = async (req, res) => {
    let image;
    try{
      const {id} = req.params;
      let imageUrl=null,imageId=null;
      const {design} = req;
      
      if (req.files && req.files.image){

        await uploadTheImage.deleteTheImage(design.cloudinaryId);
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
        description: req.body.description || design.description,
        image: imageUrl || design.image,
        cloudinaryId: imageId || design.cloudinaryId,
      }
      await updateDesign(newData);
      return successResponse(res, ok, 'updated', null, null);
    }
    catch(err){
      console.log(err,'errors');
      return errorResponse(res, badRequest, error);
    }
  }
}

export default DesignController;