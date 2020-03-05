import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};


const rootElement = document.getElementById('root')

ReactDOM.render(<Provider template={AlertTemplate} {...options}><App />
  </Provider>
  , rootElement );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
