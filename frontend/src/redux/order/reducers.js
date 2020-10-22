import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { order: false, orderDetails: false },
  data: { order: {}, success: false, orderDetails:{},orderItems: [], shippingAddress:{} },
  error: { order: '', orderDetails: '' },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.CREATE_ORDER_REQUEST:
        draft.loading.order = true;
        draft.data.success = false;
        break;
      case CONSTANTS.CREATE_ORDER_SUCCESS:
        draft.loading.order = false;
        draft.data.order = payload;
        draft.data.success = true;
        break;
      case CONSTANTS.CREATE_ORDER_FAIL:
        draft.loading.order = false;
        draft.data.success = false;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_REQUEST:
        draft.loading.orderDetails = true;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_SUCCESS:
        draft.loading.orderDetails = false;
        draft.data.orderDetails = payload;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_FAIL:
        draft.loading.orderDetails = false;
        draft.error.orderDetails = payload;
        break;
      default:
        return draft;
    }
  });

export default reducer;
