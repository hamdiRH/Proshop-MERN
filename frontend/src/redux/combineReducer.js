import { combineReducers } from 'redux';

import productListReducer from './product/reducers';
import cartReducer from './cart/reducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});

export default rootReducer;
