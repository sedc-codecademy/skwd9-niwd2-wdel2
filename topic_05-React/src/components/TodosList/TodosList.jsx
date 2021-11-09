import React from "react";
import TodoCard from "../TodoCard/TodoCard";

const TodosList = (props) => {
  return (
    <ul className="todos-list">
      {props.items.map((todo) => (
        <TodoCard
          key={todo._id}
          title={todo.title}
          date={todo.date}
          progress={todo.progress}
          description={todo.description}
        />
      ))}
    </ul>
  );
};

export default TodosList;
