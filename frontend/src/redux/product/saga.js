import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* fetchProductsList() {
  try {
    const data = yield call(api.fechProducts);
    yield put({
      type: CONSTANTS.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* fetchProductsListWatcher() {
  yield takeEvery(CONSTANTS.PRODUCT_LIST_REQUEST, fetchProductsList);
}
export default function* productSaga() {
  yield all([fetchProductsListWatcher()]);
}
