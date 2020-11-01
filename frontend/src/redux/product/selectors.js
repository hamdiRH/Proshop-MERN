import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectProducts = (state) => state.productList || initialState;

const makeSelectProducts = createSelector(
  selectProducts,
  (substate) => substate,
);
const selectFileUpload = createSelector(
  selectProducts,
  (substate) => substate.data.file,
);
const selectProductsData = createSelector(
  selectProducts,
  (substate) => substate.data.products,
);
const selectProductsReview = createSelector(
  selectProducts,
  (substate) => substate.data.review,
);
const selectNewProduct = createSelector(
  selectProducts,
  (substate) => substate.data.newProduct,
);
const selectSuccessUpdate = createSelector(
  selectProducts,
  (substate) => substate.data.updateProduct.success,
);

const selectProductDelete = createSelector(
  selectProducts,
  (substate) => substate.data.deleteProduct,
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
  selectProductDelete,
  selectProductsData,
  selectProductData,
  selectProductLoading,
  selectProductError,
  selectNewProduct,
  selectSuccessUpdate,
  selectFileUpload,
  selectProductsReview,
};
