import LocationService from '../services/locationServices';
import responseHandlers from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';

const { successResponse, errorResponse } = responseHandlers;
const {
  badRequest,
  ok,
} = statusCodes
const {
  getAllDistricts,
  updateDistrict,
  getAllNeighbourhoods,
  getAllSectors
} = LocationService;

export default class FeedbackController {

  static async updateTransportPrice(req, res) {
    try {
      const data ={
        district: req.params.name,
        price: req.body.price,
      };
        await updateDistrict(data);
        return successResponse(res, ok, 'Updated', null, null);
    }
    catch(err){
      return errorResponse(res,badRequest,err.message);          
    }

  }
  static allDistricts = async (req, res) => {
    try{
      const districts = await getAllDistricts();
      return responseHandlers.successResponse(res, ok, 'All districts', null,districts);
    }
    catch(err){
      return errorResponse(res,badRequest,err.message); 
    }
  };
  static allSectors = async (req, res) => {
    try{
      const districts = await getAllSectors();
      return responseHandlers.successResponse(res, ok, 'All Sectors', null,districts);
    }
    catch(err){
      return errorResponse(res,badRequest,err.message); 
    }
  };
}
