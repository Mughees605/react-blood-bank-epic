import React from "react";
import {connect} from "react-redux"

class User extends React.Component{
    render(){
        return (
            <div>
                <p>This is the user list page</p>
            </div>
        )
    }
}
export default connect()(User);