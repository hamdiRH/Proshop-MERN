import express from 'express';
import docsRoute from './docs.routes';
import productRoute from './product.routes';
import userRoute from './user.routes';

const router = express.Router();

router.use('/v1/doc', docsRoute);
router.use('/product', productRoute);
router.use('/user', userRoute);

export default router;
