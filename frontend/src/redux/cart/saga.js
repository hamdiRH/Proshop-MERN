import { takeEvery, put, all, call, select } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* addToCart({ id, qty }) {
  try {
    const data = yield call(api.addToCartService, id);
    const state = yield select();
    yield put({
      type: CONSTANTS.CART_ADD_ITEM_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(state.cart.data.cartItems),
    );
  } catch (error) {
    yield put({
      type: CONSTANTS.CART_ADD_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* removeFromCart({ id }) {
  try {
    const state = yield select();

    yield put({
      type: CONSTANTS.CART_REMOVE_ITEM_SUCCESS,
      payload: id,
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(state.cart.data.cartItems),
    );
  } catch (error) {
    yield put({
      type: CONSTANTS.CART_REMOVE_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export function* saveShppingAdress({address}) {
  try {
    const state = yield select();

    yield put({
      type: CONSTANTS.CART_SAVE_ADDRESS_SUCCESS,
      payload: address,
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify(address),
    );
  } catch (error) {
    yield put({
      type: CONSTANTS.CART_SAVE_ADDRESS_FAIL,
    });
  }
}

export function* addToCartWatcher() {
  yield takeEvery(CONSTANTS.CART_ADD_ITEM_REQUEST, addToCart);
}
export function* removeFromCartWatcher() {
  yield takeEvery(CONSTANTS.CART_REMOVE_ITEM_REQUEST, removeFromCart);
}
export function* saveShppingAdressWatcher() {
  yield takeEvery(CONSTANTS.CART_SAVE_ADDRESS_REQUEST, saveShppingAdress);
}

export default function* productSaga() {
  yield all([addToCartWatcher(), removeFromCartWatcher(),saveShppingAdressWatcher()]);
}
