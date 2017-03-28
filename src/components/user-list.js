import React from "react";
import {connect} from "react-redux"
import {BloodGroup} from './../store/action/request'
import {TextField, MenuItem, SelectField, RaisedButton} from "material-ui";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

var {store} = require("./../store/index.js");

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

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            bloodGroupValue: ""
        };

    }
    handleChange = (event, index, value) => {
        this.setState({bloodGroupValue: value})

    };
    handleCheck(e) {
        e.preventDefault();
        store.dispatch(BloodGroup.requestUser(this.state.bloodGroupValue));
    }

    render() {

        return (
            <div
                style={{
                with: "400px",
                margin: "0px auto"
            }}>
                <h2>Select your blood group</h2>
                <form
                    onSubmit={this
                    .handleCheck
                    .bind(this)}>
                    <SelectField
                        floatingLabelText="BloodGroup"
                        value={this.state.bloodGroupValue}
                        onChange={this
                        .handleChange
                        .bind(this)}>
                        {data
                            .bloodgroups
                            .map(bloodgroup => {
                                return <MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup}/>
                            })
}
                    </SelectField>
                    <RaisedButton type="submit">Push</RaisedButton>
                </form> 
               <Table> 
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>City</TableHeaderColumn>
                            <TableHeaderColumn>Blood Group</TableHeaderColumn>
                        </TableRow>
                    </TableHeader> 
                    <TableBody>
                    {this.props.data.map(function(val,i){
                        return (
                            <TableRow key={i}>
                                <TableRowColumn>{i+1}</TableRowColumn>
                                <TableRowColumn>{val.text}</TableRowColumn>
                                <TableRowColumn>{val.city}</TableRowColumn>
                                <TableRowColumn>{val.bloodG}</TableRowColumn>
                            </TableRow>
                        )
                    })}
                    </TableBody>
            </Table>
            </div>
        )
    }
}
export default connect()(User);