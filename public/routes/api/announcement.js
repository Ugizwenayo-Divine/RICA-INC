"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _announcementController = _interopRequireDefault(require("../../controllers/announcementController"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _announcementValidation = _interopRequireDefault(require("../../middleware/announcementValidation"));

var _announcementChecker = _interopRequireDefault(require("../../middleware/announcementChecker"));

var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var createAnnouncementValidation = _announcementValidation["default"].createAnnouncementValidation,
    updateAnnouncementValidation = _announcementValidation["default"].updateAnnouncementValidation;
var doesAnnouncementExist = _announcementChecker["default"].doesAnnouncementExist,
    doesAnnouncementNameExist = _announcementChecker["default"].doesAnnouncementNameExist;

var announcementRouter = _express["default"].Router();

announcementRouter.post('/add', isUserLoggedIn, isUserAdmin, createAnnouncementValidation, doesAnnouncementNameExist, _announcementController["default"].addAnnouncement);
announcementRouter.get('/', _announcementController["default"].getAll);
announcementRouter.get('/title', _announcementController["default"].getOneTitle);
announcementRouter.get('/:id', doesAnnouncementExist, _announcementController["default"].getOneAnnouncement);
announcementRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesAnnouncementExist, _announcementController["default"]["delete"]);
announcementRouter.patch('/:id', isUserLoggedIn, isUserAdmin, doesAnnouncementExist, updateAnnouncementValidation, _announcementController["default"].AnnouncementUpdation);
var _default = announcementRouter;
exports["default"] = _default;