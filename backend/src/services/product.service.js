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
  const product = await Product.findOneAndUpdate(
    { _id: params.id },
    { $set: { ...body } },
    {
      new: true,
    }
  );
  if (!product) throw new Error('Product not found');
  return product;
};

export const deleteProduct = async ({ params }) => {
  const product = await Product.findByIdAndRemove(params.id);
  if (!product) throw new Error('Product not found');
  return product;
};

export const createProduct = async (req) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  return createdProduct;
};
