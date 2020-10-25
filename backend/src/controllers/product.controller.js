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

//@des update product By Id
//@route PUT /api/product/id
//@access Private /Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req);
  if (product) res.status(200).send(product);
  else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//@des delete product By Id
//@route DELETE /api/product/id
//@access Private /Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await productService.deleteProduct(req);
  if (product) res.status(200).send(product);
  else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//@des delete product By Id
//@route DELETE /api/product/id
//@access Private /Admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req);
  if (product) res.status(200).send(product);
  else {
    res.status(404);
    throw new Error('Product not found');
  }
});