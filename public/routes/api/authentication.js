"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = _interopRequireDefault(require("../../controllers/authController"));

var _authValidation = _interopRequireDefault(require("../../middleware/authValidation"));

var _authentication = _interopRequireDefault(require("../../middleware/authentication"));

var signUp = _authController["default"].signUp,
    userLogin = _authController["default"].userLogin,
    updateUserType = _authController["default"].updateUserType,
    userDeletion = _authController["default"].userDeletion,
    allUsers = _authController["default"].allUsers,
    userLogout = _authController["default"].userLogout;
var isUserAdmin = _authentication["default"].isUserAdmin,
    isUserLoggedIn = _authentication["default"].isUserLoggedIn,
    doesUserExist = _authentication["default"].doesUserExist;
var loginValidation = _authValidation["default"].loginValidation,
    signupValidation = _authValidation["default"].signupValidation,
    checkUserExistance = _authValidation["default"].checkUserExistance,
    roleValidation = _authValidation["default"].roleValidation;

var authenticationRouter = _express["default"].Router();

authenticationRouter.post('/signup', signupValidation, signUp);
authenticationRouter.post('/login', loginValidation, checkUserExistance, userLogin);
authenticationRouter.patch('/update-user', isUserLoggedIn, isUserAdmin, roleValidation, doesUserExist, updateUserType);
authenticationRouter["delete"]('/delete-user/:id', isUserLoggedIn, isUserAdmin, doesUserExist, userDeletion);
authenticationRouter.get('/all', isUserLoggedIn, isUserAdmin, allUsers);
authenticationRouter.get('/logout', isUserLoggedIn, userLogout);
var _default = authenticationRouter;
exports["default"] = _default;