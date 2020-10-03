"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logging = exports.dialect = exports.port = exports.host = exports.database = exports.password = exports.username = exports.production = exports.test = exports.development = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _process$env = process.env,
    DEV_DB_USERNAME = _process$env.DEV_DB_USERNAME,
    DEV_DB_PASSWORD = _process$env.DEV_DB_PASSWORD,
    DEV_DB_NAME = _process$env.DEV_DB_NAME,
    DEV_DB_HOSTNAME = _process$env.DEV_DB_HOSTNAME,
    DEV_DB_PORT = _process$env.DEV_DB_PORT,
    TEST_DB_USERNAME = _process$env.TEST_DB_USERNAME,
    TEST_DB_PASSWORD = _process$env.TEST_DB_PASSWORD,
    TEST_DB_NAME = _process$env.TEST_DB_NAME,
    TEST_DB_HOSTNAME = _process$env.TEST_DB_HOSTNAME,
    TEST_DB_PORT = _process$env.TEST_DB_PORT,
    PROD_DB_USERNAME = _process$env.PROD_DB_USERNAME,
    PROD_DB_PASSWORD = _process$env.PROD_DB_PASSWORD,
    PROD_DB_NAME = _process$env.PROD_DB_NAME,
    PROD_DB_HOSTNAME = _process$env.PROD_DB_HOSTNAME,
    PROD_DB_PORT = _process$env.PROD_DB_PORT; // export const development = {
//   url: process.env.DEV_DATABASE_URL,
//   dialect: 'mysql',
// };
// export const test = {
//   url: process.env.TEST_DATABASE_URL,
//   dialect: 'mysql',
// };
// export const production = {
//   url: process.env.DATABASE_URL,
//   dialect: 'mysql',
// };

var development = {
  username: DEV_DB_USERNAME,
  password: DEV_DB_PASSWORD,
  database: DEV_DB_NAME,
  host: DEV_DB_HOSTNAME,
  port: DEV_DB_PORT,
  dialect: 'mysql'
};
exports.development = development;
var test = {
  username: TEST_DB_USERNAME,
  password: TEST_DB_PASSWORD,
  database: TEST_DB_NAME,
  host: TEST_DB_HOSTNAME,
  port: TEST_DB_PORT,
  dialect: 'mysql',
  logging: false
};
exports.test = test;
var production = {
  username: PROD_DB_USERNAME,
  password: PROD_DB_PASSWORD,
  database: PROD_DB_NAME,
  host: PROD_DB_HOSTNAME,
  port: PROD_DB_PORT,
  dialect: 'mysql'
};
exports.production = production;
var username = process.env.DEV_DB_USERNAME;
exports.username = username;
var password = process.env.DEV_DB_PASSWORD;
exports.password = password;
var database = process.env.DEV_DB_NAME;
exports.database = database;
var host = process.env.DEV_DB_HOSTNAME;
exports.host = host;
var port = process.env.DEV_DB_PORT;
exports.port = port;
var dialect = 'mysql';
exports.dialect = dialect;
var logging = false;
exports.logging = logging;