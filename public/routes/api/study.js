"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _studySupervisionController = _interopRequireDefault(require("../../controllers/studySupervisionController"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _consultantChecker = _interopRequireDefault(require("../../middleware/consultantChecker"));

var _consultantValidation = _interopRequireDefault(require("../../middleware/consultantValidation"));

var multipart = (0, _connectMultiparty["default"])();
var addStudySupervision = _studySupervisionController["default"].addStudySupervision,
    getAll = _studySupervisionController["default"].getAll,
    getOneStudySupervision = _studySupervisionController["default"].getOneStudySupervision,
    studySupervisionUpdation = _studySupervisionController["default"].studySupervisionUpdation,
    deleteOneStudySupervision = _studySupervisionController["default"].deleteOneStudySupervision;
var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var createConsultantValidation = _consultantValidation["default"].createConsultantValidation,
    updateStudyValidation = _consultantValidation["default"].updateStudyValidation;
var doesStudyExist = _consultantChecker["default"].doesStudyExist;

var studyRouter = _express["default"].Router();

studyRouter.post('/add', multipart, isUserLoggedIn, isUserAdmin, createConsultantValidation, addStudySupervision);
studyRouter.get('/', getAll);
studyRouter.get('/:id', doesStudyExist, getOneStudySupervision);
studyRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesStudyExist, deleteOneStudySupervision);
studyRouter.patch('/:id', multipart, isUserLoggedIn, isUserAdmin, doesStudyExist, updateStudyValidation, studySupervisionUpdation);
var _default = studyRouter;
exports["default"] = _default;