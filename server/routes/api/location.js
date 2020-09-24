import express from 'express';
import authentication from '../../middleware/authentication';
import LocationController from '../../controllers/locationController';

const {
    isUserLoggedIn,
    isUserAdmin,
} = authentication;
const {
    updateTransportPrice,
    allDistricts,
} = LocationController;

const locationRouter = express.Router();

locationRouter.get('/', allDistricts);
locationRouter.patch('/:name',isUserLoggedIn,isUserAdmin, updateTransportPrice);

export default locationRouter;
