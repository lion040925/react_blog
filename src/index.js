import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "redux/configureStore";
import './index.css';
import App from './App';

console.log( store.getState());
store.dispatch({type: "hello test action"})

ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

localStorage.setItem("sangmin","good_person")