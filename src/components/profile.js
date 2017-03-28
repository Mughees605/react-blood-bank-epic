import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AuthActions } from './../store/action/auth';
import { RaisedButton, TextField, SelectField, MenuItem } from 'material-ui';
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

function mapStateToProps(state) {
    return {
        authUser: state.AuthReducer.authUser,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(AuthActions.logout())
    };
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            bloodGroupValue: ""
        };
    }

    handleChange = (event, index, value) => this.setState({ bloodGroupValue: value });

    render() {

        return (
            <div>
                <RaisedButton style={{ float: "right" }} onClick={() => { this.props.logout() }}> Logout</RaisedButton>
                <div style={{ width: "500px", margin: "0px auto" }}>
                    <div>
                        <TextField
                            floatingLabelText="Your name"
                            fullWidth={true}
                        />
                        <TextField
                            floatingLabelText="Your city"
                            fullWidth={true}
                        />
                        <SelectField
                            floatingLabelText="Frequency"
                            ref="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            autoWidth={true}
                        >
                            {
                                data.bloodgroups.map(bloodgroup => {
                                    return <MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                                })
                            }
                        </SelectField>
                    </div>
                </div>
            </div>

        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
