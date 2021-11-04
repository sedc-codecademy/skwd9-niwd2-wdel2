import React from "react";
import TodoDate from "../TodoDate/TodoDate";

import "./TodoCard.css";

// const todo = {
//   _id: 1,
//   title: "Walk the dog",
//   progress: 10.244556,
//   description: "Lorem ipsum dolor sit amet.",
//   date: "2021-10-26",
// };

const TodoCard = (props) => {
  // console.log(props);
  return (
    <div className="todo-card">
      <div className="todo-card__details">
        <div className="todo-card__title">{props.title}</div>
        <div className="todo-card__progress">{props.progress.toFixed(2)}%</div>
        <div className="todo-card__description">{props.description}</div>
      </div>
      <TodoDate date={props.date} />
    </div>
  );
};

export default TodoCard;
