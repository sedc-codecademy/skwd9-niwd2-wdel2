import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";

const INITIAL_TODOS = [
  {
    _id: 'e1',
    title: "Walk the dog",
    progress: 10.244556,
    description: "Lorem ipsum dolor sit amet.",
    date: new Date("2019-10-27"),
  },
  {
    _id: 'e2',
    title: "Title 2",
    progress: 30.34556213,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.",
    date: new Date("2020-10-07"),
    email: "Ivan.Lazarevski@gmail.com",
  },
  {
    _id: 'e4',
    title: "Title 4",
    progress: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.",
    date: new Date("2021-10-29"),
    email: "JustAnotherTest@gmail.com",
  },
  {
    _id: 'e3',
    title: "Title 3",
    progress: 75.34667,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper et magna sit amet ornare.",
    date: new Date("2021-10-28"),
    email: "heLLoWorLd@gmail.com",
  }
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [todo, ...prevState];
    });
    console.log(todos);
  };

  return (
    <div className="container">
      <Header />
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
