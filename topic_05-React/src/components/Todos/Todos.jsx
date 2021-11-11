// import React, { useState } from "react";
// import Card from "../Card/Card";
// import TodoCard from "../TodoCard/TodoCard";

// const Todos = (props) => {
//   return (
//     <Card className="todos">
//       <TodoCard
//         title={props.todos[0].title}
//         progress={props.todos[0].progress}
//         description={props.todos[0].description}
//         date={props.todos[0].date}
//       />
//       <TodoCard
//         title={props.todos[1].title}
//         progress={props.todos[1].progress}
//         description={props.todos[1].description}
//         date={props.todos[1].date}
//       />
//       <TodoCard
//         title={props.todos[2].title}
//         progress={props.todos[2].progress}
//         description={props.todos[2].description}
//         date={props.todos[2].date}
//       />
//       <TodoCard
//         title={props.todos[3].title}
//         progress={props.todos[3].progress}
//         description={props.todos[3].description}
//         date={props.todos[3].date}
//       />
//     </Card>
//   );
// };

// export default Todos;

import React, { useState } from "react";
import Card from "../Card/Card";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodosChart from "../TodosChart/TodosChart";
import TodosList from "../TodosList/TodosList";

const Todos = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredTodos = props.todos.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="todos">
      <TodoFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <TodosChart todos={filteredTodos} />
      <TodosList items={filteredTodos} />
    </Card>
  );
};

export default Todos;
