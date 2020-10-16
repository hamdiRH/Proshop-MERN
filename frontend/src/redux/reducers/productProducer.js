import * as CONSTANTS from '../constants';
import produce from 'immer';
const initialState = {
  loading: { products: false, product: false },
  data: { products: [], product: { reviews: [] } },
  error: { products: '', product: '' },
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
      default:
        return draft;
    }
  });

export default reducer;
