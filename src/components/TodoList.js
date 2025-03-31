import React, { useState } from "react";
import Todo from "./Todo";
import Filter from "./Filter";
import { useResolution } from "../useResolution";

const TodoList = ({ todos, onDelete, onComplete, onClear }) => {
  const [filter, setFilter] = useState("all");

  const { isMobile, isTablet } = useResolution();

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
    <div className="w-full h-full absolute top-[32%] md:top-[38%] min-[375px]:top-[28%] flex flex-col items-center bottom-0">
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
        <div className="w-[87%] lg:w-[37%] h-[20%] lg:h-[8%] md:h-[30%] flex flex-col lg:flex-row gap-4 md:gap-7 lg:gap-0 lg:justify-between text-[hsl(236,9%,61%)] lg:text-sm">
          {isMobile || isTablet ? (
            <div className="lg:w-[50%] h-[50%] flex justify-around lg:justify-normal items-center bg-[hsl(0,0%,98%)] rounded-b-md">
              <p>{notCompletedCount} items left</p>
              <button onClick={onClear}>Clear Completed</button>
            </div>
          ) : (
            <>
              <p className="w-[45%] h-full flex items-center bg-[hsl(0,0%,98%)] order-1  pl-5">
                {notCompletedCount} items left
              </p>
              <button
                className="w-[52%] h-full bg-[hsl(0,0%,98%)] order-3 pr-5 hover:text-[hsl(235,19%,35%)]"
                onClick={onClear}
              >
                Clear Completed
              </button>
            </>
          )}

          <Filter filter={filter} onFilter={filterTodos} />
        </div>
      )}
    </div>
  );
};

export default TodoList;
