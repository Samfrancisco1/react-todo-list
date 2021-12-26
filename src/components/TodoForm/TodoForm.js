import React from 'react'
import "./TodoForm.css";

function TodoForm({ setInput, input, setTodos, todos }) {
    const inputHandler = e => {
        setInput(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        if(input !== ""){
            setTodos([
              ...todos,
              {
                text: input,
                completed: false,
                id: Math.random() * 1000,
              },
            ]);
        }

        setInput("");
    }

    return (
        <div>
            <form className="todo-form">
                <input type="text" onChange={inputHandler} className="todo-input" value={input} placeholder="Enter Todo Text" />
                <button type="submit" onClick={submitHandler}> Insert</button>
            </form>
        </div>
    )
}

export default TodoForm
