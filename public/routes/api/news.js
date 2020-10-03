"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _newsController = _interopRequireDefault(require("../../controllers/newsController"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var _newsValidation = _interopRequireDefault(require("../../middleware/newsValidation"));

var _newsChecker = _interopRequireDefault(require("../../middleware/newsChecker"));

var multipart = (0, _connectMultiparty["default"])();
var addNews = _newsController["default"].addNews,
    getAll = _newsController["default"].getAll,
    getOneNews = _newsController["default"].getOneNews,
    deleteOneNews = _newsController["default"].deleteOneNews,
    newsUpdation = _newsController["default"].newsUpdation,
    getOneNewsTitle = _newsController["default"].getOneNewsTitle;
var isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    isUserAdmin = _authentication["default"].isUserAdmin;
var createNewsValidation = _newsValidation["default"].createNewsValidation,
    updateNewsValidation = _newsValidation["default"].updateNewsValidation;
var doesNewsExist = _newsChecker["default"].doesNewsExist,
    doesNewsTitleExist = _newsChecker["default"].doesNewsTitleExist;

var newsRouter = _express["default"].Router();

newsRouter.post('/add', multipart, isUserLoggedIn, isUserAdmin, createNewsValidation, doesNewsTitleExist, addNews);
newsRouter.get('/', getAll);
newsRouter.get('/title', getOneNewsTitle);
newsRouter.get('/:id', doesNewsExist, getOneNews);
newsRouter["delete"]('/:id', isUserLoggedIn, isUserAdmin, doesNewsExist, deleteOneNews);
newsRouter.patch('/:id', multipart, isUserLoggedIn, isUserAdmin, doesNewsExist, updateNewsValidation, newsUpdation);
var _default = newsRouter;
exports["default"] = _default;