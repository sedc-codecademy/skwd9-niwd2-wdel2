import React from "react";
import "./NewTodo.css";
import TodoForm from "./TodoForm/TodoForm";

const NewTodo = (props) => {
  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      progress: 0,
    };
    // console.log(todoData);
    props.onAddTodo(todoData);
  };

  return (
    <div className="new-todo">
      <TodoForm onSaveTodoData={saveTodoDataHandler} />
    </div>
  );
};

export default NewTodo;
