import BonusService from '../services/bonusServices';
import responseHandlers from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';

const { successResponse, errorResponse } = responseHandlers;
const {
  createBonus,
  deleteBonus,
  getAllBonus,
  bonusExists,
} = BonusService;
const {
  badRequest,
  created,
  ok,
} = statusCodes

export default class BonusController {

  static async bonusCreation(req, res) {
    try {
      const data ={
        name: req.body.name,
      };
      const findBonus = await bonusExists('name',req.body.name);
      if(!findBonus){
        const createdData = await createBonus(data);
        if(createdData){
          return successResponse(res, created, 'Created successfull', null, createdData);
        }
        return errorResponse(res,badRequest,'Not created');
      }
      return errorResponse(res,badRequest,'The bonus with that name already exists');
    }
    catch(err){
      return errorResponse(res,badRequest,err.message);          
    }

  }
  static allBonus = async (req, res) => {
    try{
      const bonus = await getAllBonus();
      return responseHandlers.successResponse(res, ok, 'All bonus', null,bonus);
    }
    catch(err){
      return errorResponse(res,badRequest,err.message); 
    }
  };
  static deleteBonus = async (req, res) => {
    const {id} = req.params;
    try{
      await deleteBonus(id);
      return responseHandlers.successResponse(res, ok, 'Successfully deleted', null,null);
    }
    catch(err){
      return errorResponse(res,badRequest,err.message); 
    }
  };

}
