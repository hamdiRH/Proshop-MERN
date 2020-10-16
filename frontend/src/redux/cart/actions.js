import * as CONSTANTS from './constants';
import { addToCartService } from './services';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await addToCartService(id);
  dispatch({
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

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.data.cartItems));
};
