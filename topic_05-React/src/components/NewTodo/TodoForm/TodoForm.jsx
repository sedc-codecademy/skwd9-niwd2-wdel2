import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {
  //   console.log(props);

  /* Multiple State Slices */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  /* Single State */

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredDescription: "",
  //   });

  /* Logic Stars Here */

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const todoData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      description: enteredDescription,
    };
    // console.log(userInput);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredDescription("");
    // console.log(todoData);
    props.onSaveTodoData(todoData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-todo__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            autoComplete="off"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-todo__control">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            onChange={descriptionChangeHandler}
            value={enteredDescription}
          ></textarea>
        </div>
      </div>
      <div className="new-todo__actions">
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
