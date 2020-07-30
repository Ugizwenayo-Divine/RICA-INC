import express from 'express';
import authRouter from './authentication';
import newsRouter from './news';
import productRouter from './product';

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/news', newsRouter);
apiRouter.use('/product', productRouter);

export default apiRouter;
