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

export function* getorder({ id }) {
  try {
    const data = yield call(api.getOrderService, id);
    yield put({
      type: CONSTANTS.GET_ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* updateOrderToPaid({ orderId, paymentResult }) {
  try {
    const data = yield call(api.updateOrderToPaid, orderId, paymentResult);
    yield put({
      type: CONSTANTS.ORDER_PAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.ORDER_PAY_FAIL,
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

export function* getOrderWatcher() {
  yield takeEvery(CONSTANTS.GET_ORDER_DETAILS_REQUEST, getorder);
}

export function* updateOrderToPaidWatcher() {
  yield takeEvery(CONSTANTS.ORDER_PAY_REQUEST, updateOrderToPaid);
}

export default function* productSaga() {
  yield all([
    createOrderWatcher(),
    getOrderWatcher(),
    updateOrderToPaidWatcher(),
  ]);
}
