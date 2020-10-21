import { all } from 'redux-saga/effects';
import productSaga from './product/saga';
import cartSaga from './cart/saga';
import authSaga from './auth/saga';
import userSaga from './user/saga';
import orderSaga from './order/saga';

export default function* rootSaga() {
  yield all([productSaga(), cartSaga(), authSaga(), userSaga(), orderSaga()]);
}
