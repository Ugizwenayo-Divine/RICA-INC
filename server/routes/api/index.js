import express from 'express';
import authRouter from './authentication';
import newsRouter from './news';

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/news', newsRouter);

export default apiRouter;
