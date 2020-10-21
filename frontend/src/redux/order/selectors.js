import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectCart = (state) => state.order || initialState;

const selectOrder = createSelector(selectCart, (substate) => substate);
const selectOrderData = createSelector(
  selectCart,
  (substate) => substate.data.order,
);
const selectSuccessOrder = createSelector(
  selectCart,
  (substate) => substate.data.success,
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
  selectSuccessOrder,
  selectLoadingOrder,
  selectErrorOrder,
};
