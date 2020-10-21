import express from 'express';
import * as productController from '../controllers/product.controller';
import * as productValidation from '../validations/product.validation';
import validate from '../middleware/validate';
const router = express.Router();


router.get('/', productController.getProducts);
router.get('/:id',validate(productValidation.getById), productController.getProductById);

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
