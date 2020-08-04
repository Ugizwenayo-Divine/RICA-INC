import express from 'express';
import authRouter from './authentication';
import newsRouter from './news';
import productRouter from './product';
import advertisementRouter from './advertisement';
import feedbackRouter from './feedback';

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/news', newsRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/advertisement', advertisementRouter);
apiRouter.use('/feedback', feedbackRouter);

export default apiRouter;
