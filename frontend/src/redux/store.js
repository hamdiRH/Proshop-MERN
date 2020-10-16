import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import productListReducer from './reducers/productProducer';
import cartReducer from './cart/reducers';
// import rootSaga from './saga'
const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});
// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : [];
// const initialState = { cart: { cartItems: cartItemsFromStorage } };
const initialState = { };
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
// import productSaga from './product/saga'
// function* rootSaga() {
//   yield [
//     fork()
//   ]
// }
// sagaMiddleware.run(rootSaga)
export default store;
