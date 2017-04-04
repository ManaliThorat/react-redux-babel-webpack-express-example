import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import Main from './components/main';

export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Main}/>
    </Router>
)
