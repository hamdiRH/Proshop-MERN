import * as CONSTANTS from '../constants';
import { fechProducts,fechProductDetail } from '../services/productService';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: CONSTANTS.PRODUCT_LIST_REQUEST,
    });
    const data = await fechProducts();
    dispatch({
      type: CONSTANTS.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONSTANTS.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({
        type: CONSTANTS.PRODUCT_DETAILS_REQUEST,
      });
      const data = await fechProductDetail(id);
      dispatch({
        type: CONSTANTS.PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONSTANTS.PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
