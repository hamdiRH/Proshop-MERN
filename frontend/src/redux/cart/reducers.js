import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: { cartItems: false, shippingAddress: false, paymentMethod: false },
  data: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: localStorage.getItem('paymentMethod')
      ? JSON.parse(localStorage.getItem('paymentMethod'))
      : '',
  },
  error: { cartItems: '', shippingAddress: '', paymentMethod: '' },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.CART_ADD_ITEM_REQUEST:
      case CONSTANTS.CART_REMOVE_ITEM_REQUEST:
        draft.loading.cartItems = true;
        break;
      case CONSTANTS.CART_ADD_ITEM_SUCCESS:
        draft.loading.cartItems = false;
        // draft.data.cartItems = payload;
        const existItem = draft.data.cartItems.find(
          (x) => x.product === payload.product,
        );
        existItem
          ? (draft.data.cartItems = draft.data.cartItems.map((x) =>
              x.product === existItem.product ? payload : x,
            ))
          : (draft.data.cartItems = [...draft.data.cartItems, payload]);
        break;
      case CONSTANTS.CART_REMOVE_ITEM_SUCCESS:
        draft.loading.cartItems = false;
        draft.data.cartItems = draft.data.cartItems.filter(
          (x) => x.product !== payload,
        );
        break;

      case CONSTANTS.CART_ADD_ITEM_FAIL:
      case CONSTANTS.CART_REMOVE_ITEM_FAIL:
        draft.loading.cartItems = false;
        break;
      case CONSTANTS.CART_SAVE_ADDRESS_REQUEST:
        draft.loading.shippingAddress = true;
        break;
      case CONSTANTS.CART_SAVE_ADDRESS_SUCCESS:
        draft.loading.shippingAddress = false;
        draft.data.shippingAddress = payload;
        break;
      case CONSTANTS.CART_SAVE_ADDRESS_FAIL:
        draft.loading.shippingAddress = false;
        break;
      case CONSTANTS.CART_SAVE_PAYMENT_METHOD_REQUEST:
        draft.loading.paymentMethod = true;
        break;
      case CONSTANTS.CART_SAVE_PAYMENT_METHOD_SUCCESS:
        draft.loading.paymentMethod = false;
        draft.data.paymentMethod = payload;

        break;
      case CONSTANTS.CART_SAVE_PAYMENT_METHOD_FAIL:
        draft.loading.paymentMethod = false;
        break;

      default:
        return draft;
    }
  });

export default reducer;
