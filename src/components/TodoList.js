import React, { useState } from "react";
import Todo from "./Todo";
import Filter from "./Filter";

const TodoList = ({ todos, onDelete, onComplete }) => {
  const [filter, setFilter] = useState("all");

  function filterTodos(filter) {
    setFilter(filter);
  }

  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.complete)
      : filter === "complete"
      ? todos.filter((todo) => todo.complete)
      : todos;

  return (
    <div className="w-full h-full absolute top-[32%] left-1/2 transform -translate-x-1/2 bottom-0">
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
      <Filter filter={filter} onFilter={filterTodos} />
    </div>
  );
};

export default TodoList;
