import * as CONSTANTS from './constants';

export const listProducts = () => ({
  type: CONSTANTS.PRODUCT_LIST_REQUEST,
});

export const listProductDetails = (id) => ({
  type: CONSTANTS.PRODUCT_DETAILS_REQUEST,
  id,
});
