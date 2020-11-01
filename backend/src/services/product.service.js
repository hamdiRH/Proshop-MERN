import Product from '../models/product.model';

export const getAll = async (req) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  return { products, page, pages: Math.ceil(count / pageSize) };
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

export const createReview = async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString());

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

    return await product.save();
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

export const getTopProducts = async (req) => {
  return await Product.find({}).sort({ rating: -1 }).limit(3);
};
