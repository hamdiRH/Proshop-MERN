import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* userDetails({ id }) {
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

export function* userDetailsWatcher() {
  yield takeEvery(CONSTANTS.USER_DETAILS_REQUEST, userDetails);
}

export default function* productSaga() {
  yield all([userDetailsWatcher()]);
}
