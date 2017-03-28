import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AuthActions} from './../store/action/auth';
import {BloodGroup} from './../store/action/request';
import {RaisedButton, TextField, SelectField, MenuItem, Paper} from 'material-ui';
import {Link} from "react-router";
import {browserHistory} from 'react-router'

const data = {
    "bloodgroups": [
        "A+",
        "B+",
        "AB+",
        "O+",
        "A-",
        "B-",
        "AB-",
        "O-"
    ]
}

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            bloodGroupValue: ""
        };

    }
    handleLogout() {
        var {dispatch} = this.props;
        dispatch(AuthActions.logout());
    }
    handleRequestData(e) {
        var {dispatch} = this.props;
        e.preventDefault();
        var requestBlood = {
            text: this
                .refs
                .name
                .getValue(),
            city: this
                .refs
                .city
                .getValue(),
            bloodG: this.state.bloodGroupValue
        }
        dispatch(BloodGroup.submitRequest(requestBlood));

    }

    handleChange = (event, index, value) => this.setState({bloodGroupValue: value});

    render() {

        return (
            
                <div style={{margin:"30px"}}>
                    <h2>Donate Blood or Request Blood</h2>
                    <RaisedButton
                        style={{
                        float: "right"
                    }}
                        onClick={this
                        .handleLogout
                        .bind(this)}>
                        Logout</RaisedButton>
                    <Paper  zDepth={5}>
                    
                    <form
                        onSubmit={this
                        .handleRequestData
                        .bind(this)}>
                        <div
                            style={{
                            width: "500px",
                            margin: "0px auto"
                        }}>
                            <div>
                                <TextField ref="name" floatingLabelText="Your name" fullWidth={true}/>
                                <TextField ref="city" floatingLabelText="Your city" fullWidth={true}/>
                                 <TextField ref="age" floatingLabelText="Your age" fullWidth={true}/>
                                <SelectField
                                    floatingLabelText="BloodGroup"
                                    value={this.state.bloodGroupValue}
                                    onChange={this.handleChange}
                                    fullWidth={true}>
                                    {data
                                        .bloodgroups
                                        .map(bloodgroup => {
                                            return <MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup}/>
                                        })
}
                                </SelectField>
                                <RaisedButton type="submit" secondary={true}>Donate</RaisedButton>
                            </div>
                        </div>
                    </form>
                     </Paper>
                </div>
           
        );
    }
}
export default connect((state) => {
    return {user: state.authUser}
})(Profile)
