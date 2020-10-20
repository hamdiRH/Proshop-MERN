import * as CONSTANTS from './constants';

export const addToCart = (id, qty) => ({
  type: CONSTANTS.CART_ADD_ITEM_REQUEST,
  id,
  qty,
});
export const removeFromCart = (id) =>({
    type: CONSTANTS.CART_REMOVE_ITEM_REQUEST,
    id
})
export const saveShppingAdress = (address) =>({
  type: CONSTANTS.CART_SAVE_ADDRESS_REQUEST,
  address
})

