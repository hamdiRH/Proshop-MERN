import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: {
    products: false,
    product: false,
    deleteProduct: false,
    updateProduct: false,
  },
  data: {
    products: [],
    product: { reviews: [] },
    deleteProduct: false,
    updateProduct: {},
  },
  error: { products: '', product: '', deleteProduct: '', updateProduct: '' },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.PRODUCT_LIST_REQUEST:
        draft.loading.products = true;
        break;
      case CONSTANTS.PRODUCT_LIST_SUCCESS:
        draft.loading.products = false;
        draft.data.products = payload;
        break;
      case CONSTANTS.PRODUCT_LIST_FAIL:
        draft.loading.products = false;
        draft.error.products = payload;
        break;
        
      case CONSTANTS.PRODUCT_DETAILS_REQUEST:
        draft.loading.product = true;
        break;
      case CONSTANTS.PRODUCT_DETAILS_SUCCESS:
        draft.loading.product = false;
        draft.data.product = payload;
        break;
      case CONSTANTS.PRODUCT_DETAILS_FAIL:
        draft.loading.product = false;
        draft.error.product = payload;
        break;

      case CONSTANTS.DELETE_PRODUCT_REQUEST:
        draft.loading.deleteProduct = true;
        break;
      case CONSTANTS.DELETE_PRODUCT_SUCCESS:
        draft.loading.deleteProduct = false;
        draft.data.deleteProduct = true;
        break;
      case CONSTANTS.DELETE_PRODUCT_FAIL:
        draft.loading.deleteProduct = false;
        draft.error.deleteProduct = payload;
        break;

      case CONSTANTS.UPDATE_PRODUCT_REQUEST:
        draft.loading.updateProduct = true;
        break;
      case CONSTANTS.UPDATE_PRODUCT_SUCCESS:
        draft.loading.updateProduct = false;
        draft.data.updateProduct = payload;
        break;
      case CONSTANTS.UPDATE_PRODUCT_FAIL:
        draft.loading.updateProduct = false;
        draft.error.updateProduct = payload;
        break;

      default:
        return draft;
    }
  });

export default reducer;
