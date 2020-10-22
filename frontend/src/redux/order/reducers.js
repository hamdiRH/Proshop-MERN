import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { order: false, orderItems: false },
  data: { order: {}, success: false, orderItems: [], shippingAddress:{} },
  error: { order: '', orderItems: '' },
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
        draft.loading.orderItems = true;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_SUCCESS:
        draft.loading.orderItems = false;
        draft.data.orderItems = payload;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_FAIL:
        draft.loading.orderItems = false;
        draft.error.orderItems = payload;
        break;
      default:
        return draft;
    }
  });

export default reducer;
