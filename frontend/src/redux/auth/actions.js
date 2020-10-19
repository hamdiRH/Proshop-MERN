import * as CONSTANTS from './constants';

export const login = (payload) => ({
  type: CONSTANTS.USER_LOGIN_REQUEST,
  payload,
});

export const register = (payload) => ({
  type: CONSTANTS.USER_REGISTER_REQUEST,
  payload,
});

export const logout = () => ({
  type: CONSTANTS.USER_LOGOUT_REQUEST,
});
