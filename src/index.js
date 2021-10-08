import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import store from './To_Do_Component/store'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />,
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//reportWebVitals();
// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//
