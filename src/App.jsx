import { useState } from "react";
import "./App.css"

export default function App(){
 const [todos, setTodos] = useState(["New Todo"]);
 const [input, setInput] = useState("");
 const [edit, setEdit] = useState(null);

 const handleChange = (e) => {
  setInput(e.target.value)
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  if(edit !== null) {
    setTodos((prevTodos) => prevTodos.map((todo, i) => i === edit ? input : todo) )
    setEdit(null);
  }else{
    setTodos((prevTodos) => [...prevTodos, input]);
  }
  setInput("");
 }


 const handleDelete = (index) => {
  setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
 }


 const handleEdit = (index) => {
  setEdit(index);
  setInput(todos[index]);
 }

 return(
  <div className="todo-card">
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Function ToDo</label>
      <input id="todo" name="todo" type="text" value={input} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
    <h3>Function Todo-List</h3>
    <ul>
    {todos.map((todo, i) => (
      <li key={i}>{todo}
      <button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button>
      <button className="edit-btn" onClick={() => handleEdit(i)}> Edit </button>
      </li>
    ))}
    </ul>

    <p className="count-text" >Count : {todos.length} </p>



  </div>
 )
}