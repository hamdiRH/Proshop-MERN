import express from 'express';
import * as productController from '../controllers/product.controller';
import * as productValidation from '../validations/product.validation';
import { auth, admin } from '../middleware/auth';
import validate from '../middleware/validate';
const router = express.Router();

router.get('/', productController.getProducts);
router.get('/top', productController.getTopProducts);
router.post('/', auth, admin, productController.createProduct);
router
  .route('/:id')
  .get(validate(productValidation.getById), productController.getProductById)
  .put(auth, admin, productController.updateProduct)
  .delete(auth, admin, productController.deleteProduct);

router.post('/:id/reviews', auth, productController.createReview);


export default router;

