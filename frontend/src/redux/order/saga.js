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

export function* getConfig() {
  try {
    const data = yield call(api.getConfig);
    yield put({
      type: CONSTANTS.GET_CONFIG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_CONFIG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export function* getMyOrders() {
  try {
    const data = yield call(api.getMyOrders);
    yield put({
      type: CONSTANTS.GET_MY_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_MY_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* getAllOrders() {
  try {
    const data = yield call(api.getAllOrders);
    yield put({
      type: CONSTANTS.GET_ALL_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_ALL_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
export function* DelivredOrder({id}) {
  try {
    const data = yield call(api.DelivredOrder,id);
    yield put({
      type: CONSTANTS.ORDER_DELIVRED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.ORDER_DELIVRED_FAIL,
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

export function* getConfigWatcher() {
  yield takeEvery(CONSTANTS.GET_CONFIG_REQUEST, getConfig);
}

export function* getMyOrdersWatcher() {
  yield takeEvery(CONSTANTS.GET_MY_ORDERS_REQUEST, getMyOrders);
}

export function* getAllOrdersWatcher() {
  yield takeEvery(CONSTANTS.GET_ALL_ORDERS_REQUEST, getAllOrders);
}

export function* DelivredOrderWatcher() {
  yield takeEvery(CONSTANTS.ORDER_DELIVRED_REQUEST, DelivredOrder);
}

export default function* productSaga() {
  yield all([
    createOrderWatcher(),
    getOrderWatcher(),
    updateOrderToPaidWatcher(),
    getConfigWatcher(),
    getMyOrdersWatcher(),
    getAllOrdersWatcher(),
    DelivredOrderWatcher()
  ]);
}
