import { Component } from "react";
import "./App.css"

class Count extends Component{
    render(){
        return(
            <div className="count-box">
                 Total Todos = {this.props.total}
            </div>
        )
    }
}
export default Count;