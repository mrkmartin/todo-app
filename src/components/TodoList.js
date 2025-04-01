import React, { useState } from "react";
import Todo from "./Todo";
import Filter from "./Filter";
import { useResolution } from "../useResolution";

const TodoList = ({ todos, onDelete, onComplete, onClear, darkTheme }) => {
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

  console.log(`todolist: darktheme: ${darkTheme}`);

  return (
    <div
      className={`w-full h-auto absolute top-[32%] md:top-[38%] min-[800px]:top-[35%] min-[375px]:top-[28%] lg:top-[35%] flex flex-col items-center `}
    >
      {filteredTodos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
          isFirst={index === 0}
          darkTheme={darkTheme}
        />
      ))}
      {todos.length > 0 && (
        <div
          className={`w-[87%] lg:w-[37%] h-[20%] lg:h-[8vh] md:h-[30%] flex flex-col lg:flex-row gap-4 md:gap-7 lg:gap-0 lg:justify-between ${
            darkTheme ? "text-[hsl(233,14%,35%)]" : "text-[hsl(236,9%,61%)]"
          } lg:text-sm `}
        >
          {isMobile || isTablet ? (
            <div
              className={`lg:w-[50%] h-[8vh] md:h-[11vh] flex justify-around lg:justify-normal items-center ${
                darkTheme ? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"
              }
               rounded-b-md`}
            >
              <p>{notCompletedCount} items left</p>
              <button onClick={onClear}>Clear Completed</button>
            </div>
          ) : (
            <>
              <p
                className={`w-[45%] h-full flex items-center  ${
                  darkTheme ? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"
                } order-1  pl-5 rounded-bl-md`}
              >
                {notCompletedCount} items left
              </p>
              <button
                className={`w-[52%] h-full ${
                  darkTheme ? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"
                } order-3 pr-5 ${
                  darkTheme
                    ? "hover:text-[hsl(236,33%,92%)]"
                    : "hover:text-[hsl(235,19%,35%)]"
                } rounded-br-md`}
                onClick={onClear}
              >
                Clear Completed
              </button>
            </>
          )}

          <Filter
            filter={filter}
            onFilter={filterTodos}
            darkTheme={darkTheme}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
