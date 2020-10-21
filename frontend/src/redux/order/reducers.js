import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { order: false },
  data: { order: {}, success: false },
  error: { order: '' },
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
      default:
        return draft;
    }
  });

export default reducer;
