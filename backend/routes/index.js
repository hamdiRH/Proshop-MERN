import express from 'express';
import docsRoute from './docs.route';
import productRoute from './productRoutes';

const router = express.Router();

router.use('/v1/doc', docsRoute);
router.use('/product', productRoute);

export default router;
