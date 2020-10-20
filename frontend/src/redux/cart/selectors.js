import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectCart = (state) => state.cart || initialState;

const selectCartItems = createSelector(selectCart, (substate) => substate);

const selectCartItemsData = createSelector(
  selectCart,
  (substate) => substate.data.cartItems,
);

const selectShippingCartAdress = createSelector(
  selectCart,
  (substate) => substate.data.shippingAddress,
);

const selectCartItemsLoading = createSelector(
  selectCart,
  (substate) => substate.loading.cartItems,
);

const selectCartItemsError = createSelector(
  selectCart,
  (substate) => substate.error.cartItems,
);

export default selectCartItems;
export {
  selectCartItems,
  selectCartItemsData,
  selectCartItemsLoading,
  selectCartItemsError,
  selectShippingCartAdress
};
