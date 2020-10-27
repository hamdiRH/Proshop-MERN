import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { login: false, logout: false, register: false },
  data: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : {},
  },
  error: { login: '', logout: '', register: '' },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.USER_LOGIN_FG_REQUEST:
      case CONSTANTS.USER_LOGIN_REQUEST:
        draft.loading.login = true;
        break;
      case CONSTANTS.USER_LOGIN_SUCCESS:
      case CONSTANTS.USER_LOGIN_FG_SUCCESS:
        draft.loading.login = false;
        draft.data.userInfo = payload;
        break;
      case CONSTANTS.USER_LOGIN_FAIL:
      case CONSTANTS.USER_LOGIN_FG_FAIL:
        draft.loading.login = false;
        draft.error.login = payload;
        break;
      case CONSTANTS.USER_LOGOUT_REQUEST:
        draft.loading.logout = true;
        break;
      case CONSTANTS.USER_LOGOUT_FAIL:
      case CONSTANTS.USER_LOGOUT_SUCCESS:
        draft.loading.logout = false;
        draft.data.userInfo = {};
        break;
      case CONSTANTS.USER_REGISTER_REQUEST:
        draft.loading.register = true;
        break;
      case CONSTANTS.USER_REGISTER_SUCCESS:
        draft.loading.register = false;
        draft.data.userInfo = payload;
        break;
      case CONSTANTS.USER_REGISTER_FAIL:
        draft.loading.register = false;
        draft.error.register = payload;
        break;
      default:
        return draft;
    }
  });

export default reducer;
