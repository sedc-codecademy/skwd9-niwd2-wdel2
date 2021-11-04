import React from "react";
import "./TodoDate.css";

const TodoDate = (props) => {
  // console.log(props);

  const dateObj = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    year: props.date.getFullYear(),
  };

  return (
    <div className="todo-card__date">
      <div className="todo-card__month">{dateObj.month}</div>
      <div className="todo-card__year">{dateObj.year}</div>
      <div className="todo-card__day">{dateObj.day}</div>
    </div>
  );
};

export default TodoDate;
