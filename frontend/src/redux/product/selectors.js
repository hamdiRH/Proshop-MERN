import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectProducts = (state) => state.productList || initialState;

const makeSelectProducts = createSelector(selectProducts, (substate) => substate);

const selectProductsData = createSelector(
  selectProducts,
  (substate) => substate.data.products,
);

const selectProductData = createSelector(
  selectProducts,
  (substate) => substate.data.product,
);

const selectProductLoading = createSelector(
  selectProducts,
  (substate) => substate.loading,
);

const selectProductError = createSelector(
  selectProducts,
  (substate) => substate.error,
);

export default makeSelectProducts;
export {
  selectProductsData,
  selectProductData,
  selectProductLoading,
  selectProductError,
};
