import React, { Component } from 'react';
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { AppBar, FlatButton } from 'material-ui';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
    };
}
class LoginSignup extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated) {
            browserHistory.replace('dashboard');
        }
    }
    render() {
        return (
            <div>
                <AppBar title="React Blood Bank" iconElementRight={<span><Link to="/login"><FlatButton label="Login" /></Link> <Link to="/signup"><FlatButton label="Signup" /></Link></span>} ></AppBar>
                {this.props.children}
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(LoginSignup)