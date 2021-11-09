import React from "react";
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
        <TodoDate date={props.date} />
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default TodoCard;
