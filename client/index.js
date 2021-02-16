import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './helpers/scss/global.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

console.log("process is env-----", process.env.NODE_ENV)
console.log("process is env-----", process.env.PUBLISHABLE_KEY)
console.log("process is env-----", process.env.HELLO)