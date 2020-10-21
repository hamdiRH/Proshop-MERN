import Product from '../models/product.model';

export const getAll = async () => {
  const products = await Product.find();
  return products;
};

export const getById = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new Error('Product not found');
  return product;
};
