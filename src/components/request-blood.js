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

class RequestBlood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            bloodGroupValue: ""
        };

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
             <Paper  zDepth={2} style={{width:"600px" ,margin:"0px auto"}}>
                <div>
                    <h2 style={{textAlign:"center"}}>Donate Blood</h2>
                   
                    
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
                    
                </div>
                 </Paper>
           
        );
    }
}
export default connect()(RequestBlood);
