import { Component } from "react";

class Class extends Component{
   constructor(props){
    super(props)

    this.state = {
        todos : ["New Class to-do"],
        input : "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
   }

   render(){
    return(
        <div>
          <form>
            <label htmlFor = "todo">Class To-do</label>
            <input type="text" id="todo" name="todo" value={this.state.input} onChange={this.handleChange}/>
          </form>
        </div>
    )
}
}


