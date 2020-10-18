import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* login({ payload }) {
  try {
    const data = yield call(api.loginService, payload);

    yield put({
      type: CONSTANTS.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('token', data.token);
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* register({ payload }) {
  try {
    const data = yield call(api.registerService, payload);

    yield put({
      type: CONSTANTS.USER_REGISTER_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('token', data.token);
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* logout() {
  try {
    yield put({
      type: CONSTANTS.USER_LOGOUT_SUCCESS,
    });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_LOGOUT_FAIL,
    });
  }
}
export function* loginWatcher() {
  yield takeEvery(CONSTANTS.USER_LOGIN_REQUEST, login);
}

export function* logoutWatcher() {
  yield takeEvery(CONSTANTS.USER_LOGOUT_REQUEST, logout);
}

export function* registerWatcher() {
  yield takeEvery(CONSTANTS.USER_REGISTER_REQUEST, register);
}

export default function* productSaga() {
  yield all([loginWatcher(), logoutWatcher(), registerWatcher()]);
}
