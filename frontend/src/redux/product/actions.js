import * as CONSTANTS from './constants';

export const listProducts = () => ({
  type: CONSTANTS.PRODUCT_LIST_REQUEST,
});

export const listProductDetails = (id) => ({
  type: CONSTANTS.PRODUCT_DETAILS_REQUEST,
  id,
});

export const deleteProduct = (id) => ({
  type: CONSTANTS.DELETE_PRODUCT_REQUEST,
  id,
});

export const updateProduct = (id,product) => ({
  type: CONSTANTS.UPDATE_PRODUCT_REQUEST,
  id,
  product
});
