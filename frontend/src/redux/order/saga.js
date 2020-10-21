import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* createOrder({ order }) {
  try {
    const data = yield call(api.createOrderService, order);
    yield put({
      type: CONSTANTS.CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* createOrderWatcher() {
  yield takeEvery(CONSTANTS.CREATE_ORDER_REQUEST, createOrder);
}

export default function* productSaga() {
  yield all([createOrderWatcher()]);
}
