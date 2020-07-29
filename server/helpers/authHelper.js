import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

const passwordHasher = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

const generateToken = async (data) => {
  const tokenData = _.omit(data, 'password');
  const token = jwt.sign(
    tokenData,
    process.env.JWT_KEY,
    {
      expiresIn: `${process.env.SIGN_UP_TOKEN_EXPIRES_IN}`
    }
  );
  return token;
};

const decodeToken = async (token) => {
  const data = jwt.verify(token, process.env.JWT_KEY);
  return data;
};

const convertToLowerCase = (text) => {
  if (text) {
    return text.toLowerCase();
  }
  return '';
};
export default {
  passwordHasher,
  generateToken,
  decodeToken,
  convertToLowerCase
};