import express from 'express';
import authRouter from './authentication';

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);

export default apiRouter;
