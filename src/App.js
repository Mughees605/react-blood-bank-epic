import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { AuthActions } from './store/action/auth';
import { firebaseService } from './service/firebaseService';


import UserList from "./containers/user-list"

import Dashboard from './components/dashboard'
import Profile from './components/profile'
import User from "./components/user-list"
import UserSelect from "./components/user-select"
import Thanks from "./components/last"

import Login from '././components/auth/login'
import Signup from '././components/auth/signup'
import LoginSignup from './components/auth/login-signup'

function mapStateToProps(state) {
    return { isAuthenticated: state.AuthReducer.isAuthenticated };
}
function mapDispatchToProps(dispatch) {
    return {
        isLoggedIn: () => dispatch(AuthActions.isLoggedIn())
    };
}

class App extends Component {
    constructor(props) {
        super(props);
        this
            .props
            .isLoggedIn();
    }
    render() {
        return (
            <Router history={browserHistory}>

                <Route path="/" component={LoginSignup}>
                    <IndexRoute component={Login} />
                    <Route path="login" component={Login} />
                    <Route path="signup" component={Signup} />
                </Route>
                <Route path="dashboard" component={Dashboard}>
                        <IndexRoute component={UserSelect} />
                        <Route path="thanks" component={Thanks}></Route>
                        <Route path="profile" component={Profile} />
                        <Route path="user" component={UserList} />
                    </Route>


            </Router>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);