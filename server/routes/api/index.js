import express from 'express';
import authRouter from './authentication';
import newsRouter from './news';
import productRouter from './product';
import advertisementRouter from './advertisement';
import feedbackRouter from './feedback';
import announcementRouter from './announcement';
import ordersRouter from './orders';
import paymentRouter from './payment';
import historyRouter from './history';
import refundRouter from './refund';
import studyRouter from './study';
import designRouter from './design';

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/news', newsRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/advertisement', advertisementRouter);
apiRouter.use('/feedback', feedbackRouter);
apiRouter.use('/announcement', announcementRouter);
apiRouter.use('/orders', ordersRouter);
apiRouter.use('/payment', paymentRouter);
apiRouter.use('/history', historyRouter);
apiRouter.use('/refund', refundRouter);
apiRouter.use('/study', studyRouter);
apiRouter.use('/design', designRouter);

export default apiRouter;
