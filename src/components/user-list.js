import React from "react"

class App extends React.Component{
    render(){
        return (
            <div>
                <p>This is the user list page</p>
            </div>
        )
    }
}
export default connect()(App);