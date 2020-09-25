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
    allSectors,
    getSectorsByDistrict,
} = LocationController;

const locationRouter = express.Router();

locationRouter.get('/', allDistricts);
locationRouter.get('/sector', allSectors);
locationRouter.get('/sector/:id', getSectorsByDistrict);
locationRouter.patch('/:name',isUserLoggedIn,isUserAdmin, updateTransportPrice);

export default locationRouter;
