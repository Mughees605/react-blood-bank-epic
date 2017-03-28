import React,{Component} from "react"
import {connect} from "react-redux";
import User from "../components/user-list.js"

class UserList extends Component{
    render(){
        return(
           <div>
               This is the container
               <User/>
               {this.props.data.map(function(val,i){
                   return (
                       <p key={i}>{val.city}</p>
                   )
               })}
           </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.BloodReducer
    }
})(UserList)