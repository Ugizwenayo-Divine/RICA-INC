import express from 'express';
import authentication from '../../middleware/authentication';
import FeedbackController from '../../controllers/feedbackController';
import feedbackChecker from '../../middleware/feedbackChecker';
import FeedbackValidation from '../../middleware/feedbackValidation';

const {
    isUserLoggedIn,
    isUserAdmin,
} = authentication;
const {
    allFeedbacks,
    feedbackCreation,
    deleteFeedbacks,
} = FeedbackController;
const {
    doesFeedbackExist,
} = feedbackChecker;
const {
    feedbackValidation,
} = FeedbackValidation;

const feedbackRouter = express.Router();

feedbackRouter.post('/add', isUserLoggedIn, feedbackValidation, feedbackCreation);
feedbackRouter.get('/',isUserLoggedIn,isUserAdmin, allFeedbacks);
feedbackRouter.delete('/:id',isUserLoggedIn,isUserAdmin, doesFeedbackExist, deleteFeedbacks);

export default feedbackRouter;
