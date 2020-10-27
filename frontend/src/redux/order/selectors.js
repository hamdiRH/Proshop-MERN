import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectCart = (state) => state.order || initialState;

const selectOrder = createSelector(selectCart, (substate) => substate);
const selectOrderData = createSelector(
  selectCart,
  (substate) => substate.data.order,
);
const selectOrderDetailsData = createSelector(selectCart, (substate) => ({
  order: substate.data.orderDetails,
  success: substate.data.orderPaySuccess,
}));
const selectAllOrders = createSelector(
  selectCart,
  (substate) => substate.data.orders,
);
const selectMyOrders = createSelector(
  selectCart,
  (substate) => substate.data.myOrders,
);
const selectSuccessOrder = createSelector(
  selectCart,
  (substate) => substate.data.success,
);
const selectSuccessDelivred = createSelector(
  selectCart,
  (substate) => substate.data.delivred,
);
const selectClientId = createSelector(
  selectCart,
  (substate) => substate.data.ClientID,
);
const selectLoadingOrder = createSelector(
  selectCart,
  (substate) => substate.loading.order,
);
const selectErrorOrder = createSelector(
  selectCart,
  (substate) => substate.error.order,
);

export default selectOrder;
export {
  selectOrder,
  selectOrderData,
  selectOrderDetailsData,
  selectSuccessOrder,
  selectSuccessDelivred,
  selectLoadingOrder,
  selectErrorOrder,
  selectClientId,
  selectMyOrders,
  selectAllOrders,
};
