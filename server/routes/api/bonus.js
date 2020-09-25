import express from 'express';
import authentication from '../../middleware/authentication';
import BonusController from '../../controllers/bonusController';

const {
    isUserLoggedIn,
    isUserAdmin,
} = authentication;
const {
    allBonus,
    bonusCreation,
    deleteBonus
} = BonusController;

const bonusRouter = express.Router();

bonusRouter.post('/add', isUserLoggedIn,isUserAdmin, bonusCreation);
bonusRouter.get('/', allBonus);
bonusRouter.delete('/:id',isUserLoggedIn,isUserAdmin, deleteBonus);

export default bonusRouter;
