import { combineReducers } from 'redux';

import productListReducer from './product/reducers';
import cartReducer from './cart/reducers';
import authReducer from './auth/reducers';
import userReducer from './user/reducers';
import orderReducer from './order/reducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  auth: authReducer,
  user: userReducer,
  order: orderReducer,
});

export default rootReducer;
