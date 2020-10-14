import express from 'express';
import docsRoute from './docs.route';
import productRoute from './productRoutes';

const router = express.Router();

router.use('/v1/docs', docsRoute);
router.use('/products', productRoute);

export default router;
