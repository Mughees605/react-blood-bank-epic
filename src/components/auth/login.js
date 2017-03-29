import React, { Component } from 'react';
import { connect } from 'react-redux'

import { AuthActions } from '../../store/action/auth';

import { browserHistory } from 'react-router'
import { RaisedButton, TextField, Paper } from 'material-ui';

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
            this.setState({ errorPopup: true })
        }
        // if (nextProps.isAuthenticated) {     browserHistory.push('/dashboard'); }
    }

    doLogin() {
        var { dispatch } = this.props;
        var email = this
            .refs
            .email
            .getValue();
        var password = this
            .refs
            .password
            .getValue();
        dispatch(AuthActions.login({ email, password }))
        console.log(email, password);

    }
    render() {
        return (
            <Paper zDepth={3} style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
                <div>
                    <h1>Login</h1>
                    <TextField defaultValue="mughees@google.com" type="text" hintText="Email" ref="email" />
                    <br />
                    <TextField
                        defaultValue="google64"
                        type="password"
                        hintText="password"
                        ref="password" />
                    <br />
                    <br/>
                    <RaisedButton onClick={this.doLogin} secondary={true}>
                        Login
                </RaisedButton>
                </div>
            </Paper>
        )
    }
}
export default connect()(Login)