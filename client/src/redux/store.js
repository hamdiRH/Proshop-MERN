import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './combineSaga'
import rootReducer from './combineReducer'

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
export default store;
