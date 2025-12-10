import { useState } from "react"
import "./App.css"

export default function FunctionApp(){
    
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(["New Sample Todo"]);
    const [edit, setEdit] = useState(null);

    const handleChange = (e) => {
      setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(edit !== null) {
            setTodos((prevTodo) => prevTodo.map((todo, i) => i === edit ? input : todo))
            setEdit(null);
        }else {
          setTodos((prevTodo) => [...prevTodo, input])
      }
      setInput("");
    } 

    const handleDelete = (index) => {
        setTodos((prevTodo) => prevTodo.filter((_, i) => i !== index))
    }

    const handleEdit = (index) => {
        setEdit(index);
        setInput(todos[index]);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor= "todo">Function To-Do Name</label>
                <input type="text" id="todo" name="todo" value={input} onChange={handleChange} />
                <button type="submit">
                    {edit !== null ? "Update" : "  Submit"}
                </button>
            </form>

            <h3>Function To-do List</h3>
            <ul>
                {todos.map((todo, i)=> (
                    <li key={i}>{todo}
                    <button onClick = {() => handleDelete(i)}>Delete</button>
                    <button onClick = {() => handleEdit(i)}>Edit</button>
                    </li>
                )) }
            </ul>

            <p>Count: {todos.length}</p>
        </div>
    )
}