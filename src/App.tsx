import React, { useEffect } from 'react';
// x    import { RootState } from './redux';

import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { RootState } from "./redux"
import { useDispatch, useSelector } from 'react-redux';
// core components
import Admin from './layouts/Admin';
import Login from './layouts/Login';

import 'assets/css/material-dashboard-react.css?v=1.6.0';
import Profile from './layouts/Profile';
import { verify } from './redux/action/auth';

const hist = createBrowserHistory();


function App() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(verify())
    }, [])
    return (
        <Router history={hist}>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />

                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </Router>
    );
}
export default App;
