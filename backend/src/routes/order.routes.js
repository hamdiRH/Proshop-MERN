import express from 'express';
import * as orderController from '../controllers/order.controller';
import validate from '../middleware/validate';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/', auth, /*validate(orderValidation.addOrderItems),*/ orderController.addOrderItems);
router.get('/:id', auth, /** */ orderController.getOrderItemsById);
router.put('/:id/pay', auth, /** */ orderController.updateOrderToPaid);

export default router;

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: CRUD products
 */

/**
 * @swagger
 * path:
 *  /order:
 *    post:
 *      summary: Add New Order
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - orderItems
 *                - shippingAddress
 *                - paymentMethod
 *                - itemsPrice
 *                - taxPrice
 *                - shippingPrice
 *                - totalPrice
 *              properties:
 *                  id:
 *                      type: string
 *                  user:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *                  orderItems:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              qty:
 *                                  type: number
 *                              image:
 *                                  type: string
 *                              price:
 *                                  type: number
 *                              product:
 *                                  type: object
 *                                  $ref: '#/components/schemas/Product'
 *                  shippingAddress:
 *                      type: object
 *                      properties:
 *                          address:
 *                              type: string
 *                          city:
 *                              type: string
 *                          postalCode:
 *                              type: string
 *                          country:
 *                              type: string
 *                  paymentMethod:
 *                      type: string
 *                  paymentResult:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                          status:
 *                              type: string
 *                          update_time:
 *                              type: string
 *                          email_adresse:
 *                              type: string
 *                  taxPrice:
 *                      type: number
 *                  shippingPrice:
 *                      type: number
 *                  totalPrice:
 *                      type: number
 *                  isPaid:
 *                      type: boolean
 *                  paidAt:
 *                      type: date
 *                  isDelivered:
 *                      type: boolean
 *                  deliveredAt:
 *                      type: date
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  order:
 *                    $ref: '#/components/schemas/Order'
 *        "401":
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 *              example:
 *                code: 401
 *                message: Unauthorized
 */

/**
 * @swagger
 * path:
 *  /order/{id}:
 *    get:
 *      summary: Get Order
 *      description: Get Order By Id
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Order id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Order'
 * */

 /**
 * @swagger
 * path:
 *  /order/{id}/pay:
 *    put:
 *      summary: Update order to paid
 *      description: Update order to paid
 *      tags: [Order]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - id
 *                - status
 *                - update_time
 *                - email_address
 *              properties:
 *                  id:
 *                      type: string
 *                  status:
 *                      type: string
 *                  update_time:
 *                      type: string
 *                  email_address:
 *                      type: string
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Order id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Order'
 * */
