import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* getuserDetails({ id }) {
  try {

    const data = yield call(api.userDetailsService, id);

    yield put({
      type: CONSTANTS.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* updateUserDetails({user}) {
  try {

    const data = yield call(api.updateUserService, user);

    yield put({
      type: CONSTANTS.USER_UPDATE_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('token', data.token);
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export function* resetUserDetails({ id }) {
  try {

    const data = yield call(api.userDetailsService, id);

    yield put({
      type: CONSTANTS.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export function* getuserDetailsWatcher() {
  yield takeEvery(CONSTANTS.USER_DETAILS_REQUEST, getuserDetails);
}
export function* updateUserDetailsWatcher() {
  yield takeEvery(CONSTANTS.USER_UPDATE_REQUEST, updateUserDetails);
}
export function* resetUserDetailsWatcher() {
  yield takeEvery(CONSTANTS.USER_RESET_REQUEST, resetUserDetails);
}

export default function* productSaga() {
  yield all([getuserDetailsWatcher(),updateUserDetailsWatcher(),resetUserDetailsWatcher()]);
}
