import React, {Component} from 'react';
import {connect} from 'react-redux'

import {AuthActions} from './../store/action/auth';

import {browserHistory} from 'react-router'
import {RaisedButton, TextField} from 'material-ui';

class Login extends Component {
    constructor(props) {
        super(props) //for using 'this.'
        this.doLogin = this
            .doLogin
            .bind(this)
    }

    componentWillReceiveProps(nextProps) {
        console.log("Login component nextProps: ", nextProps);
        if (nextProps.isError) {
            // alert(nextProps.errorMessage);
            this.setState({errorPopup: true})
        }
        // if (nextProps.isAuthenticated) {     browserHistory.push('/dashboard'); }
    }

    doLogin() {
        var {dispatch} = this.props;
        var email = this
            .refs
            .email
            .getValue();
        var password = this
            .refs
            .password
            .getValue();
        dispatch(AuthActions.login({email, password}))
        console.log(email, password);

    }
    render() {
        return (
            <div>
                <div>this is Login</div>

                <TextField defaultValue="abc@abc.com" type="text" hintText="Email" ref="email"/>
                <br/>
                <TextField
                    defaultValue="aaaaaa"
                    type="password"
                    hintText="password"
                    ref="password"/>
                <br/>

                <RaisedButton onClick={this.doLogin} primary={true}>
                    Login
                </RaisedButton>
            </div>
        )
    }
}
export default connect()(Login)