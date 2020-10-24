import express from 'express';
import docsRoute from './docs.routes';
import productRoute from './product.routes';
import userRoute from './user.routes';
import orderRoute from './order.routes';
import configRoute from './config.routes';


const router = express.Router();

router.use('/v1/doc', docsRoute);
router.use('/product', productRoute);
router.use('/user', userRoute);
router.use('/order', orderRoute);
router.use('/config',configRoute);

export default router;
