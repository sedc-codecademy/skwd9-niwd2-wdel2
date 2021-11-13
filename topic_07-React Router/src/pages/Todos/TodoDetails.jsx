import React from "react";
import { useParams } from "react-router";

const TodoDetails = () => {
  const { id } = useParams();
  return <h2 className="todo-details">Details works! - ID: {id}</h2>;
};

export default TodoDetails;
