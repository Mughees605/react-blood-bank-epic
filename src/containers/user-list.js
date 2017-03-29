import React,{Component} from "react"
import {connect} from "react-redux";
import User from "../components/user-list.js"

class UserList extends Component{
    render(){
        return(
           <div>
               <User data = {this.props.data}/>
           </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.BloodReducer
    }
})(UserList)

