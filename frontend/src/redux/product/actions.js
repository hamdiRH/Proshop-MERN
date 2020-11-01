import * as CONSTANTS from './constants';

export const listProducts = (keyword = '', pageNumber = '') => ({
  type: CONSTANTS.PRODUCT_LIST_REQUEST,
  keyword,
  pageNumber,
});

export const listProductDetails = (id) => ({
  type: CONSTANTS.PRODUCT_DETAILS_REQUEST,
  id,
});

export const deleteProduct = (id) => ({
  type: CONSTANTS.DELETE_PRODUCT_REQUEST,
  id,
});

export const updateProduct = (id, product) => ({
  type: CONSTANTS.UPDATE_PRODUCT_REQUEST,
  id,
  product,
});

export const createProduct = () => ({
  type: CONSTANTS.CREATE_PRODUCT_REQUEST,
});

export const uploadFile = (file) => ({
  type: CONSTANTS.CREATE_PRODUCT_REQUEST,
  file,
});

export const createProductReview = (id, review) => ({
  type: CONSTANTS.CREATE_PRODUCT_REVIEW_REQUEST,
  id,
  review,
});

export const listTopProducts = () => ({
  type: CONSTANTS.TOP_PRODUCT_LIST_REQUEST
});