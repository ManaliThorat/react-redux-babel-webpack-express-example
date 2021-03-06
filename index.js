import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './src/reducers/index';
import routes from './src/routes';
import thunk from 'redux-thunk';



const store = createStore(
    reducers,
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>,
    document.getElementById("reactbody")
);

