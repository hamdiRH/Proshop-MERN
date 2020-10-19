import { combineReducers } from 'redux';

import productListReducer from './product/reducers';
import cartReducer from './cart/reducers';
import authReducer from './auth/reducers';
import userReducer from './user/reducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
