import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import Login from "./Login";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={Login} />
        </Router>
    </Provider>
    , document.querySelector('#root'));