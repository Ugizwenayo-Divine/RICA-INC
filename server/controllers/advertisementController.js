import AdvertisementServices from '../services/advertisementServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import uploadTheImage from '../helpers/uploadImage';
import authHelper from '../helpers/authHelper';

const {
    createAdvertisement,
    getAllAdvertisement,
    getAdvertisement,
    deleteAdvertisement,
    updateAdvertisement,
    getAllAdvertisementByType,
} = AdvertisementServices;
const {
    errorResponse,
    successResponse,
} = responseHandler;
const {
    error,
    successCreation,
    wrongType,
    selectImage,
    allAdvertisement,
    advertisement,
    deleted,
} = responseMessage;
const {
    badRequest,
    created,
    unAuthorized,
    unSupportedMedia,
    ok,
} = statusCode;
const {
    convertToLowerCase,
} = authHelper;

class AdvertisementController {
  static addAdvertisement = async (req,res) => {
    const {sessionUser} = req;
    const {id} = sessionUser;
    const { title, description, type, advertisingCompany } = req.body;

    try{
      if (req.files && req.files.image) {
        let image;
        if (req.files.image.type || req.files.image.length) {
          image = await uploadTheImage.uploader(req.files.image);
        } 
        else {
          return errorResponse(res, badRequest, selectImage);
        }
        
        if (!image.url || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        } else null;
        const data = {
          advertisedBy:id,
          title,
          description,
          type: await convertToLowerCase(type),
          advertisingCompany,
          image:image.url,
          cloudinaryId:image.public_id,
        }
        const result = await createAdvertisement(data);
        return successResponse(res,created,successCreation,null,result);
      }
      return errorResponse(res, unAuthorized, selectImage);
 
    }
    catch(err){
      return errorResponse(res,badRequest,error);
    }
  }
  static getAll = async (req, res) => {
    try{
      const advertisement = await getAllAdvertisement();
      return successResponse(res, ok, allAdvertisement, null, advertisement);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getOneAdvertisement = async (req, res) => {
    try{
      const {id} = req.params;
      const oneAdvertisement = await getAdvertisement(id);
      return successResponse(res, ok, advertisement, null, oneAdvertisement);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static deleteOneAdvertisement = async (req, res) => {
    try{
      const {id} = req.params;
      const {advertisement} = req;
      await uploadTheImage.deleteTheImage(advertisement.cloudinaryId);
      await deleteAdvertisement(id);
      return successResponse(res, ok, deleted, null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static advertisementUpdation = async (req, res) => {
    let image;
    try{
      const {id} = req.params;
      let imageUrl=null, imageId=null;
      const {advertisement} = req;
            
      if (req.files && req.files.image){

        await uploadTheImage.deleteTheImage(advertisement.cloudinaryId);
        image = await uploadTheImage.uploader(req.files.image);
        if (!image || image.url.includes('null')) {
         return errorResponse(res, unSupportedMedia, wrongType);
        }
        const {url, public_id} = image;
        imageUrl = url;
        imageId = public_id;
      }
      const convertedType = req.body.type ? await convertToLowerCase(req.body.type) : null;
      const newData = {
        id,
        title: req.body.title || advertisement.title,
        description: req.body.description || advertisement.description,
        type: convertedType || advertisement.type,
        advertisingCompany: req.body.advertisingCompany || advertisement.advertisingCompany,
        image: imageUrl || advertisement.image,
        cloudinaryId: imageId || advertisement.cloudinaryId,
      }
      await updateAdvertisement(newData);
      return successResponse(res, ok, 'updated', null, null);
    }
    catch(err){
      return errorResponse(res, badRequest, error);
    }
  }
  static getAllExternal = async (req, res) => {
    try{
      const advertisement = await getAllAdvertisementByType('external');
      return successResponse(res, ok, allAdvertisement, null, advertisement);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
  static getAllInternal = async (req, res) => {
    try{
      const advertisement = await getAllAdvertisementByType('internal');
      return successResponse(res, ok, allAdvertisement, null, advertisement);
    }
    catch(error){
      return errorResponse(res, badRequest, error);
    }
  }
}

export default AdvertisementController;