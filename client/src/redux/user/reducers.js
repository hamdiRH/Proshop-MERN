import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: {
    user: false,
    userInfo: false,
    usersList: false,
    deleteUser: false,
    userInfoAdmin: false,
    updateUserAdmin: false,
  },
  data: {
    user: {},
    userInfo: {},
    usersList: [],
    deleteUser: { success: false },
    userInfoAdmin: {},
    updateUserAdmin: false,
  },
  error: {
    user: '',
    userInfo: '',
    usersList: '',
    deleteUser: '',
    userInfoAdmin: '',
    updateUserAdmin: '',
  },
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

      case CONSTANTS.GET_USERS_LIST_REQUEST:
        draft.loading.usersList = true;
        break;
      case CONSTANTS.GET_USERS_LIST_SUCCESS:
        draft.loading.usersList = false;
        draft.data.usersList = payload;
        break;

      case CONSTANTS.GET_USERS_LIST_FAIL:
        draft.loading.usersList = false;
        draft.error.usersList = payload;
        break;

      case CONSTANTS.DELETE_USER_REQUEST:
        draft.loading.deleteUser = true;
        draft.data.deleteUser = { success: false };
        break;
      case CONSTANTS.DELETE_USER_SUCCESS:
        draft.loading.deleteUser = false;
        draft.data.deleteUser = { data: payload, success: true };
        break;
      case CONSTANTS.DELETE_USER_FAIL:
        draft.loading.deleteUser = false;
        draft.data.deleteUser = { success: false };
        draft.error.deleteUser = payload;
        break;
      case CONSTANTS.ADMIN_GET_USER_DETAILS_REQUEST:
        draft.loading.userInfoAdmin = true;
        draft.data.userInfoAdmin = {};
        break;
      case CONSTANTS.ADMIN_GET_USER_DETAILS_SUCCESS:
        draft.loading.userInfoAdmin = false;
        draft.data.userInfoAdmin = payload;
        break;
      case CONSTANTS.ADMIN_GET_USER_DETAILS_FAIL:
        draft.loading.userInfoAdmin = false;
        draft.error.userInfoAdmin = payload;
        draft.data.userInfoAdmin = {};
        break;

      case CONSTANTS.ADMIN_USER_UPDATE_REQUEST:
        draft.loading.updateUserAdmin = true;
        draft.data.updateUserAdmin = false;
        break;
      case CONSTANTS.ADMIN_USER_UPDATE_SUCCESS:
        draft.loading.updateUserAdmin = false;
        draft.data.updateUserAdmin = true;
        break;
      case CONSTANTS.ADMIN_USER_UPDATE_FAIL:
        draft.loading.updateUserAdmin = false;
        draft.error.userInfoAdmin = payload;
        draft.data.updateUserAdmin = false;

        break;
      case CONSTANTS.ADMIN_RESET_UPDATE_USER:
        draft.loading.updateUserAdmin = false;
        draft.error.userInfoAdmin = '';
        draft.data = {
          user: {},
          userInfo: {},
          usersList: [],
          deleteUser: { success: false },
          userInfoAdmin: {},
          updateUserAdmin: false,
        };

      default:
        return draft;
    }
  });

export default reducer;
