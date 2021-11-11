import React, { useState } from "react";
import Card from "../Card/Card";
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
  // document.querySelector('button').addEventListener('click', () => {});
  // const [title, setTitle] = useState(props.title);
  // let title = props.title;

  // const clickHandler = () => {
  //   console.log("Hello World!");
  //   title = "Updated!";
  //   console.log(title);
  //   setTitle("Updated Title!");
  // };

  const [isEditing, setIsEditing] = useState(false);
  const [newProgress, setNewProgress] = useState(0);

  const deleteTodoHander = async () => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://localhost:4000/api/todos/${props.id}`,
        options
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const newProgressChangeHandler = (e) => {
    setNewProgress(e.target.value);
  };

  const submitProgressHandler = async (e) => {
    e.preventDefault();

    const options = {
      method: "PATCH",
      body: JSON.stringify({
        progress: newProgress,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `http://localhost:4000/api/todos/${props.id}`,
      options
    );
    const result = await response.json();
    console.log(result);
    setIsEditing(false);
  };

  return (
    <li>
      <Card className="todo-card">
        <div className="todo-card__details">
          <div className="todo-card__title">{props.title}</div>
          <div className="todo-card__progress">
            {props.progress.toFixed(2)}%
          </div>
          <div className="todo-card__description">{props.description}</div>
        </div>
        <div>
          <TodoDate date={props.date} />
          <button onClick={deleteTodoHander}>Delete Todo</button>
          <button onClick={startEditingHandler}>Update Todo</button>
        </div>
      </Card>
      {isEditing && (
        <div className="progress-form">
          <form onSubmit={submitProgressHandler}>
            <input
              type="text"
              autoComplete="off"
              className="progress-input"
              onChange={newProgressChangeHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </li>
  );
};

export default TodoCard;
