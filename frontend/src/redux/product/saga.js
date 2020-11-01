import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as api from './services';
import * as CONSTANTS from './constants';

export function* fetchProductsList({ keyword, pageNumber }) {
  try {
    const data = yield call(api.fechProducts, keyword, pageNumber);
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

export function* listProductDetails({ id }) {
  try {
    const data = yield call(api.fechProductDetail, id);

    yield put({
      type: CONSTANTS.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* deleteProduct({ id }) {
  try {
    const data = yield call(api.deleteProduct, id);

    yield put({
      type: CONSTANTS.DELETE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.DELETE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* updateProduct({ id, product }) {
  try {
    const data = yield call(api.updateProduct, id, product);

    yield put({
      type: CONSTANTS.UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.UPDATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* createNewProduct() {
  try {
    const data = yield call(api.createProduct);

    yield put({
      type: CONSTANTS.CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.CREATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* uploadFile({ file }) {
  try {
    const data = yield call(api.uploadFile, file);

    yield put({
      type: CONSTANTS.UPLOAD_FILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.UPLOAD_FILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* createProductReview({ id, review }) {
  try {
    const data = yield call(api.createReview, id, review);

    yield put({
      type: CONSTANTS.CREATE_PRODUCT_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.CREATE_PRODUCT_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export function* topProducts() {
  try {
    const data = yield call(api.topProducts);

    yield put({
      type: CONSTANTS.TOP_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CONSTANTS.TOP_PRODUCT_LIST_FAIL,
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
export function* listProductDetailsWatcher() {
  yield takeEvery(CONSTANTS.PRODUCT_DETAILS_REQUEST, listProductDetails);
}
export function* deleteProductWatcher() {
  yield takeEvery(CONSTANTS.DELETE_PRODUCT_REQUEST, deleteProduct);
}
export function* updateProductWatcher() {
  yield takeEvery(CONSTANTS.UPDATE_PRODUCT_REQUEST, updateProduct);
}
export function* createNewProductWatcher() {
  yield takeEvery(CONSTANTS.CREATE_PRODUCT_REQUEST, createNewProduct);
}
export function* uploadFileWatcher() {
  yield takeEvery(CONSTANTS.UPLOAD_FILE_REQUEST, uploadFile);
}
export function* createProductReviewWatcher() {
  yield takeEvery(CONSTANTS.CREATE_PRODUCT_REVIEW_REQUEST, createProductReview);
}
export function* topProductsWatcher() {
  yield takeEvery(CONSTANTS.TOP_PRODUCT_LIST_REQUEST, topProducts);
}
export default function* productSaga() {
  yield all([
    fetchProductsListWatcher(),
    listProductDetailsWatcher(),
    deleteProductWatcher(),
    updateProductWatcher(),
    createNewProductWatcher(),
    uploadFileWatcher(),
    createProductReviewWatcher(),
    topProductsWatcher(),
  ]);
}
