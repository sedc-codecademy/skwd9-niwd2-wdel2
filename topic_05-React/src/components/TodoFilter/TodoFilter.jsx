import React from "react";
import "./TodoFilter.css";

const TodoFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="todos-filter">
      <div className="todos-filter__control">
        <label htmlFor="year-filter">Filter by year</label>
        <select
          value={props.selected}
          id="year-filter"
          onChange={dropdownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
