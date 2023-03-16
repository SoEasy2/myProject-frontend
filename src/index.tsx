import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css'
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const store = setupStore()
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

