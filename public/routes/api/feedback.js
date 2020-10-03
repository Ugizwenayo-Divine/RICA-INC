"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _feedbackController = _interopRequireDefault(require("../../controllers/feedbackController"));

var _feedbackChecker = _interopRequireDefault(require("../../middleware/feedbackChecker"));

var _feedbackValidation = _interopRequireDefault(require("../../middleware/feedbackValidation"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var allFeedbacks = _feedbackController["default"].allFeedbacks,
    feedbackCreation = _feedbackController["default"].feedbackCreation,
    deleteFeedbacks = _feedbackController["default"].deleteFeedbacks;
var doesFeedbackExist = _feedbackChecker["default"].doesFeedbackExist;
var feedbackValidation = _feedbackValidation["default"].feedbackValidation;

var feedbackRouter = _express["default"].Router();

feedbackRouter.post('/add', isUserLoggedIn, feedbackValidation, feedbackCreation);
feedbackRouter.get('/', isUserLoggedIn, isUserAdmin, allFeedbacks);
feedbackRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesFeedbackExist, deleteFeedbacks);
var _default = feedbackRouter;
exports["default"] = _default;