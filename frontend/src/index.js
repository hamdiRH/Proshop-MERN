import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'onscroll-effect';
import App from './App';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import './bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
