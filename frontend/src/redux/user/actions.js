import * as CONSTANTS from './constants';

export const getUserDetails = (id) => ({
  type: CONSTANTS.USER_DETAILS_REQUEST,
  id,
});


export const updateUserDetails = (user) => ({
  type: CONSTANTS.USER_UPDATE_REQUEST,
  user,
});

export const resetUserDetails = (id) => ({
  type: CONSTANTS.USER_RESET_REQUEST,
  id,
});

export const listUsers = () => ({
  type: CONSTANTS.GET_USERS_LIST_REQUEST
});

export const deleteUser = (id) => ({
  type: CONSTANTS.DELETE_USER_REQUEST,
  id
});

export const AdminUpdateUserDetails = (id,user) => ({
  type: CONSTANTS.ADMIN_USER_UPDATE_REQUEST,
  id,
  user,
});

export const AdminGetUserDetails = (id) => ({
  type: CONSTANTS.ADMIN_GET_USER_DETAILS_REQUEST,
  id,
});

export const resetUpdateUserReducer = () => ({
  type: CONSTANTS.ADMIN_RESET_UPDATE_USER,
});
