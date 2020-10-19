import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { userDetails: false },
  data: {user:{}},
  error: { userDetails: '' },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.USER_DETAILS_REQUEST:
        draft.loading.userDetails = true;
        break;
      case CONSTANTS.USER_DETAILS_SUCCESS:
        draft.loading.userDetails = false;
        draft.data.user = payload;
        break;
      case CONSTANTS.USER_DETAILS_FAIL:
        draft.loading.userDetails = false;
        draft.error.userDetails = payload;
        break;
    
      default:
        return draft;
    }
  });

export default reducer;
