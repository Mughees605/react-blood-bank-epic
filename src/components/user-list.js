import React from "react";
import { connect } from "react-redux"
import { BloodGroup } from './../store/action/request'
import { TextField, MenuItem, SelectField, RaisedButton } from "material-ui";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

var { store } = require("./../store/index.js");

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
            bloodGroupValue: "AB+"
        };

    }
    handleChange = (event, index, value) => {
        this.setState({ bloodGroupValue: value })

    };
    handleCheck(e) {
        var {dispatch} = this.props;
        e.preventDefault();
        var blood = this.state.bloodGroupValue;
        var arr = [];
          
        switch (blood) {
            case "A+":
                arr.push(['A+', 'O+', 'A-', 'O-']);

            case "B+": {
                arr.push(['B+', 'O+', 'B-', 'O-']);
                break;
            }
            case "AB+": {
                arr.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
                break;
            }
            case "O+": {
                arr.push(['O+', 'O-']);
                break;
            }
            case "A-": {
                arr.push(['A-', 'O-']);
                break;
            }
            case "B-": {
                arr.push(['B-', 'O-']);
                break;
            }
            case "AB-": {
                arr.push(['AB-', 'O-', 'A-', 'B-']);
                break;
            }
            case "O-": {
                arr.push(['O-']);
                break;
            }
            default : 
            arr.push("A+")
               
        }
    dispatch(BloodGroup.requestUser(arr));
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
                       floatingLabelText="search your matching blood groups"
                        value={this.state.bloodGroupValue}
                        onChange={this
                            .handleChange
                            .bind(this)}>
                        {data
                            .bloodgroups
                            .map(bloodgroup => {
                                return <MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup} />
                            })
                        }
                    </SelectField>
                    <RaisedButton type="submit"  primary={true}>Serch</RaisedButton>
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
                        {this.props.data.map(function (val, i) {
                            return (
                                <TableRow key={i}>
                                    <TableRowColumn>{i + 1}</TableRowColumn>
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