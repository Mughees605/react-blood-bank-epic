import React from "react";
import {RaisedButton} from "material-ui";
import {Link} from "react-router";
import {connect} from "react-redux";
import {store} from "../store/index.js"
import {BloodGroup} from "../store/action/request"
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
store.dispatch(BloodGroup.allUser());
class AllUsers extends React.Component {

    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>All users Data</h1>
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
                        {this
                            .props
                            .data
                            .map(function (val, i) {
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
export default connect((state) => {
    return {data: state.BloodReducer}
})(AllUsers);