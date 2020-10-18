import { combineReducers } from 'redux';

import productListReducer from './product/reducers';
import cartReducer from './cart/reducers';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
