import "./App.css";
import Header from "./components/Header/Header";
import TodoCard from "./components/TodoCard/TodoCard";

function App() {
  const todos = [
    {
      _id: 1,
      title: "Walk the dog",
      progress: 10.244556,
      description: "Lorem ipsum dolor sit amet.",
      date: new Date("2021-10-27"),
    },
    {
      _id: 2,
      title: "Title 2",
      progress: 30.34556213,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.",
      date: new Date("2021-10-07"),
      email: "Ivan.Lazarevski@gmail.com",
    },
    {
      _id: 3,
      title: "Title 3",
      progress: 75.34667,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper et magna sit amet ornare.",
      date: new Date("2021-10-28"),
      email: "heLLoWorLd@gmail.com",
    },
    {
      _id: 4,
      title: "Title 4",
      progress: 100,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.",
      date: new Date("2021-10-29"),
      email: "JustAnotherTest@gmail.com",
    },
  ];

  return (
    <div className="container">
      <Header />
      <TodoCard
        title={todos[0].title}
        progress={todos[0].progress}
        description={todos[0].description}
        date={todos[0].date}
      />
      <TodoCard
        title={todos[1].title}
        progress={todos[1].progress}
        description={todos[1].description}
        date={todos[1].date}
      />
      <TodoCard
        title={todos[2].title}
        progress={todos[2].progress}
        description={todos[2].description}
        date={todos[2].date}
      />
      <TodoCard
        title={todos[3].title}
        progress={todos[3].progress}
        description={todos[3].description}
        date={todos[3].date}
      />
    </div>
  );
}

export default App;
