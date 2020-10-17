import asyncHandler from 'express-async-handler';
import * as productService from '../services/product.service';

//@des fetch all products
//@route GET /api/products
//@access Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getAll();
  res.status(200).send(products);
});


//@des fetch single product
//@route GET /api/products/:id
//@access Public
export const getProductById = asyncHandler(async (req, res) => {
    const product = await productService.getById(req.params.id);
    res.status(200).send(product);
  });