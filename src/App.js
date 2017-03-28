import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { AuthActions } from './store/action/auth';
import { firebaseService } from './service/firebaseService';

import LoginSignup from './containers/login-signup'
import Dashboard from './containers/dashboard'

import Login from './components/login'
import Signup from './components/signup'
import Profile from './components/profile'
import User from "./components/user-list"

function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
    };
}
function mapDispatchToProps(dispatch) {
    //auto dispatch
    // dispatch(AuthActions.isLoggedIn());
    return {
        isLoggedIn: () => dispatch(AuthActions.isLoggedIn())
    };
}


class App extends Component {
    constructor(props) {
        super(props);
        this.props.isLoggedIn();
    }
    render() {
        return (
            <Router history={browserHistory}>

                <Route path="/" component={LoginSignup} >
                    <IndexRoute component={Login} />
                    <Route path="login" component={Login} />
                    <Route path="signup" component={Signup} />
                </Route>

                <Route path="dashboard" component={Dashboard}  >
                    <IndexRoute component={Profile} />
                    <Route path="user" component={User} />
                </Route>
            </Router>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);