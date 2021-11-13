import React from "react";
import "./Todos.css";
import TodoCard from "./TodoCard";

const Todos = () => {
  const todos = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ];
  return (
    <div className="todos">
      {todos.map((t) => (
        <TodoCard todo={t} key={t.id} />
      ))}
    </div>
  );
};

export default Todos;
