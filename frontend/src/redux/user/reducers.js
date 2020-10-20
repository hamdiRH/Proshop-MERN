import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { user: false, userInfo: false },
  data: { user: {}, userInfo: {} },
  error: { user: '', userInfo: '' },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.USER_DETAILS_REQUEST:
        draft.loading.user = true;
        break;
      case CONSTANTS.USER_DETAILS_SUCCESS:
        draft.loading.user = false;
        draft.data.user = payload;
        break;
      case CONSTANTS.USER_DETAILS_FAIL:
        draft.loading.user = false;
        draft.error.user = payload;
        break;

      case CONSTANTS.USER_UPDATE_REQUEST:
        draft.loading.userInfo = true;
        break;
      case CONSTANTS.USER_UPDATE_SUCCESS:
        draft.loading.userInfo = false;
        draft.data.userInfo = { ...payload, success: true };
        break;
      case CONSTANTS.USER_UPDATE_FAIL:
        draft.loading.userInfo = false;
        draft.error.user = payload;
        break;

      default:
        return draft;
    }
  });

export default reducer;
