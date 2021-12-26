import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="main">
      <div className="glass">
        <h2>Todo List</h2>
        <TodoForm setInput={setInput} input={input} todos={todos} setTodos={setTodos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
