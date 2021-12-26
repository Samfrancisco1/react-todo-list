import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    saveToLocalStorage();
  }, [todos])

  //Saving todos in localStorage
  const saveToLocalStorage = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <div className="main">
      <div className="glass">
        <h2>Todo List</h2>
        <TodoForm
          setInput={setInput}
          input={input}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>

      <Footer />
    </div>
  );
}

export default App;
