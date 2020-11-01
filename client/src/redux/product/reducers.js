import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: {
    products: false,
    product: false,
    deleteProduct: false,
    updateProduct: false,
    file: false,
    review: false,
    topProducts: false,
  },
  data: {
    topProducts: [],
    products: {
      products: [],
    },
    product: { reviews: [] },
    deleteProduct: false,
    updateProduct: { data: {}, success: false },
    newProduct: { data: {}, success: false },
    file: {},
    review: { success: false },
  },
  error: {
    products: '',
    product: '',
    deleteProduct: '',
    updateProduct: '',
    file: '',
    review: '',
    topProducts: '',
  },
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
        draft.data.updateProduct = { data: payload, success: true };
        break;
      case CONSTANTS.UPDATE_PRODUCT_FAIL:
        draft.loading.updateProduct = false;
        draft.error.updateProduct = payload;
        break;
      case 'PRODUCT_UPDATE_RESET':
        draft.loading.updateProduct = false;
        draft.data.updateProduct = {};
        draft.error.updateProduct = '';
        break;

      case CONSTANTS.CREATE_PRODUCT_REQUEST:
        draft.loading.newProduct = true;
        break;
      case CONSTANTS.CREATE_PRODUCT_SUCCESS:
        draft.loading.newProduct = false;
        draft.data.newProduct = { data: payload, success: true };
        break;
      case CONSTANTS.CREATE_PRODUCT_FAIL:
        draft.loading.newProduct = false;
        draft.error.newProduct = payload;
        break;
      case CONSTANTS.CREATE_PRODUCT_RESET:
        draft.loading.newProduct = false;
        draft.error.newProduct = '';
        draft.data.newProduct = {};
        break;

      case CONSTANTS.UPLOAD_FILE_REQUEST:
        draft.loading.file = true;
        break;
      case CONSTANTS.UPLOAD_FILE_SUCCESS:
        draft.loading.file = false;
        draft.data.file = payload;
        break;
      case CONSTANTS.UPLOAD_FILE_FAIL:
        draft.loading.file = false;
        draft.error.file = payload;
        break;

      case CONSTANTS.CREATE_PRODUCT_REVIEW_REQUEST:
        draft.loading.review = true;

        break;

      case CONSTANTS.CREATE_PRODUCT_REVIEW_SUCCESS:
        draft.loading.review = false;
        draft.data.review = { success: true };
        break;

      case CONSTANTS.CREATE_PRODUCT_REVIEW_FAIL:
        draft.loading.review = false;
        draft.error.review = payload;

        break;
      case CONSTANTS.CREATE_PRODUCT_REVIEW_RESET:
        draft.loading.review = false;
        draft.error.review = false;
        draft.data.review = { success: false };
        break;

      case CONSTANTS.TOP_PRODUCT_LIST_REQUEST:
        draft.loading.topProducts = true;
        break;
      case CONSTANTS.TOP_PRODUCT_LIST_SUCCESS:
        draft.loading.topProducts = false;
        draft.data.topProducts = payload;
        break;
      case CONSTANTS.TOP_PRODUCT_LIST_FAIL:
        draft.error.topProducts = payload;
        draft.loading.topProducts = false;

        break;

      default:
        return draft;
    }
  });

export default reducer;
