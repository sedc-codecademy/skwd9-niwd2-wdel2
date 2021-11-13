import React from "react";
import "./TodoCard.css";
import { Link } from "react-router-dom";

const TodoCard = (props) => {
  const routerLink = `/todos/${props.todo.id}`;
  return (
    <Link to={routerLink} className="todo">
      <div className="todo-title">{props.todo.title}</div>
    </Link>
  );
};

export default TodoCard;
