import AdvertisementServices from '../services/advertisementServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
const {
  getAdvertisement,
} = AdvertisementServices;
const {
  errorResponse,
} = responseHandler;
const {
  noAdvertisement,
} = responseMessage;
const {
  badRequest,
} = statusCode;

const doesAdvertisementExist = async (req,res,next) => {
  let advertisement;
  const {id} = req.params;
  advertisement = await getAdvertisement(id);
  if(advertisement){
    req.advertisement=advertisement.dataValues;
    return next();
  }
  return errorResponse(res,badRequest,noAdvertisement);
}

export default { doesAdvertisementExist }