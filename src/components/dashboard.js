import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { AuthActions } from './../store/action/auth';

import { AppBar, IconButton, FlatButton } from 'material-ui';

function mapStateToProps(state) {
    return { isAuthenticated: state.AuthReducer.isAuthenticated, user: state.BloodReducer };
}
class Dashboard extends Component {

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isAuthenticated) {
            browserHistory.replace('login');
        }
    }
    handleLogout() {
        var { dispatch } = this.props;
        dispatch(AuthActions.logout());
    }
    render() {
        return (
            <div>
                <AppBar title="This is Dashboard" iconElementRight={
                    <span>
                        <FlatButton label="Logout" onClick={this.handleLogout.bind(this)} />
                        <Link to = "/dashboard/profile"><FlatButton label="Donate Blood" /></Link>
                        <Link to = "/dashboard/user"><FlatButton label="Request Blood" /></Link>
                    </span>
                }></AppBar>
                {this.props.children}
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(Dashboard)