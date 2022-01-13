import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {configureStore} from  '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './features/user';

const store = configureStore({
  //Contains all the reducers
  reducer: {
    user: userReducer,
  },
});


ReactDOM.render(
  <React.StrictMode>
    {/* On this way everything inside in Provider can get the store */}
    <Provider store={store}>  <App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
