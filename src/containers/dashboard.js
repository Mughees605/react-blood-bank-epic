import React, {Component} from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {AppBar} from 'material-ui';

function mapStateToProps(state) {
    return {isAuthenticated: state.AuthReducer.isAuthenticated,user:state.BloodReducer};
}
class Dashboard extends Component {

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isAuthenticated) {
            browserHistory.replace('login');
        }
    }
    render() {
        return (
            <div>
                <AppBar title="This is Dashboard"></AppBar>
                {this.props.children}
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(Dashboard)