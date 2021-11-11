import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchTodosHandler = () => {
  //   fetch("http://localhost:4000/api/todos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const mappedData = data.map((todo) => {
  //         return {
  //           ...todo,
  //           date: new Date(todo.date),
  //         };
  //       });
  //       // console.log(mappedData);
  //       setTodos(mappedData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const fetchTodosHandlerAsync = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/todos");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const result = await response.json();
      const mappedData = result.map((todo) => {
        return {
          ...todo,
          date: new Date(todo.date),
        };
      });
      setTodos(mappedData);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  const addTodoHandler = async (todo) => {
    const options = {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("http://localhost:4000/api/todos", options);
      const result = await response.json();
      const newTodoResponse = {
        ...result,
        date: new Date(result.date)
      }
      setTodos((prevState) => {
        return [newTodoResponse, ...prevState];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodosHandlerAsync();
  }, [fetchTodosHandlerAsync]);

  // return (
  //   <div className="container">
  //     <Header />
  //     <NewTodo onAddTodo={addTodoHandler} />
  //     {isLoading && <p>Loading...</p>}
  //     {!isLoading && todos.length > 0 && <Todos todos={todos} />}
  //     {!isLoading && error && <p>{error}</p>}
  //     <button onClick={fetchTodosHandlerAsync}>Get Todos</button>
  //   </div>
  // );

  let content = <p>Found no todos!</p>;

  if (todos.length > 0) {
    content = <Todos todos={todos} />;
  }

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="container">
      <Header />
      <NewTodo onAddTodo={addTodoHandler} />
      {content}
      <button onClick={fetchTodosHandlerAsync}>Get Todos</button>
    </div>
  );
}

export default App;
