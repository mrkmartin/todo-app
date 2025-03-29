import React, { useState } from "react";
import Todo from "./Todo";
import Filter from "./Filter";

const TodoList = ({ todos, onDelete, onComplete, onClear }) => {
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

  const notCompletedCount = todos.filter((todo) => !todo.complete).length;

  return (
    <div className="w-full h-full absolute top-[32%] min-[375px]:top-[28%] flex flex-col items-center bottom-0">
      {filteredTodos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
          isFirst={index === 0}
        />
      ))}
      {todos.length > 0 && (
        <>
          <div className="w-[87%] h-[10%] flex justify-around items-center text-[hsl(236,9%,61%)] bg-[hsl(0,0%,98%)] rounded-b-md">
            <p>{notCompletedCount} items left</p>
            <button onClick={onClear}>Clear Completed</button>
          </div>
          <Filter filter={filter} onFilter={filterTodos} />
        </>
      )}
    </div>
  );
};

export default TodoList;
