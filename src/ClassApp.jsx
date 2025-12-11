import { Component } from "react";
import Count from "./Count";
import "./App.css"

class ClassApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos : ["New Class Todo"],
            input : "",
            edit : null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.edit !== null) {
            this.setState((state) => ({
                todos: state.todos.map((todo, i) => (
                    i === state.edit ? state.input : todo    
                )), 
                input: "",
                edit : null,
            }))
            
        }else {
        this.setState((state) => ({
         todos: [...state.todos, state.input],
         input: "",
    }));
        }
    }

    handleDelete = (index) => {
        this.setState((state) => (
            {todos : state.todos.filter((_, i) => i !== index)}
        ))
    }

    handleEdit = (index) => {
    this.setState({
        edit : index,
        input: this.state.todos[index]
    })
    }

    render() {
        return(
            <div className="todo-card">
             <form onSubmit={this.handleSubmit}>
                <label htmlFor ="todo"> Class ToDo </label>
                    <input type="text" id ="todo" name="todo" value={this.state.input}  onChange={this.handleChange} />
             <button type="submit" > 
                {this.state.edit !== null ? "Update" : "Submit"}
                </button>
            </form>

             <h3>Class To-do List</h3>
             <ul>
                {this.state.todos.map((todo, i) => (
                    <li key={i}>{todo}
                    <button className="delete-btn" onClick={() => this.handleDelete(i)}>Delete</button>
                    <button className="edit-btn" onClick={() => this.handleEdit(i)}>Edit</button>
                    </li>
                ))}
             </ul>

           <Count total={this.state.todos.length}/>
   
            </div>
        )
    }
}

export default ClassApp;
