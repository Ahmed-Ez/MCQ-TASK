import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './redux/reducers/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {};
const store = createStore(allReducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
