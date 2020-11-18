import express from 'express';
import * as orderController from '../controllers/order.controller';
import validate from '../middleware/validate';
import { auth, admin } from '../middleware/auth';

const router = express.Router();

router.get('/myorders', auth, /** */ orderController.getMyOrders);
router.get('/:id', auth, /** */ orderController.getOrderItemsById);
router.put('/:id/pay', auth, /** */ orderController.updateOrderToPaid);
router.put('/:id/delivred', auth,admin, /** */ orderController.updateOrderToDelivred);
router.post('/', auth, /*validate(orderValidation.addOrderItems),*/ orderController.addOrderItems);
router.get('/', auth, admin, orderController.getAllorders);

export default router;
