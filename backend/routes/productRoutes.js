import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/product.model';
const router = express.Router();

//@des fetch all products
//@route GET /api/products
//@access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@des fetch single product
//@route GET /api/products/:id
//@access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

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
 *  /products:
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
 *  /products/{id}:
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
