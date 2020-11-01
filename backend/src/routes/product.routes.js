import express from 'express';
import * as productController from '../controllers/product.controller';
import * as productValidation from '../validations/product.validation';
import { auth, admin } from '../middleware/auth';
import validate from '../middleware/validate';
const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', auth, admin, productController.createProduct);
router
  .route('/:id')
  .get(validate(productValidation.getById), productController.getProductById)
  .put(auth, admin, productController.updateProduct)
  .delete(auth, admin, productController.deleteProduct);

router.post('/:id/reviews', auth, productController.createReview);


export default router;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: CRUD products
 */

/**
 * @swagger
 * path:
 *  /product:
 *    get:
 *      summary: Get all products
 *      description: Fetch all products
 *      tags: [Products]
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Product'
 * */

/**
 * @swagger
 * path:
 *  /product/{id}:
 *    get:
 *      summary: Get a product
 *      description: get one product by id
 *      tags: [Products]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Product id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * path:
 *  /product/{id}:
 *    put:
 *      summary: update product
 *      description: Update product
 *      tags: [Products]
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Product'
 * */

/**
 * @swagger
 * path:
 *  /product/{id}:
 *    delete:
 *      summary: delete product
 *      description: delete product
 *      tags: [Products]
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Product'
 * */
