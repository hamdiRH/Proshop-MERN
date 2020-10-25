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

export const updateProduct = async ({ params, body }) => {
  const product = await Product.findOneAndUpdate({ _id: params.id }, { $set: { ...body } });
  if (!product) throw new Error('Product not found');
  return product;
};

export const deleteProduct = async ({params}) => {
  const product = await Product.findByIdAndRemove(params.id);
  if (!product) throw new Error('Product not found');
  return product;
};

export const createProduct = async ({body}) => {
  const product = await Product.create(body);
  if (!product) throw new Error('Product not created');
  return product;
};