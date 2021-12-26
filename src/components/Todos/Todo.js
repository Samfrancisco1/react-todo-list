import React from "react";
import "./Todo.css";

function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const checkHandler = (e) => {
    e.preventDefault();

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
         
        }
         return item;
      })
    );
  };

  return (
    <li className="todo">
      <p className={`todo-item ${ todo.completed ? "completed" : " " }`}>{text}</p>
      <div className="buttons">
        <button className="check" onClick={checkHandler} type="submit">
          !
        </button>
        <button className="delete" onClick={deleteHandler} type="submit">
          x
        </button>
      </div>
    </li>
  );
}

export default Todo;
