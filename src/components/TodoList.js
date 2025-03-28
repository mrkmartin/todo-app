import React from "react";
import Todo from "./Todo";
import Filter from "./Filter";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="w-full h-full absolute top-[32%] left-1/2 transform -translate-x-1/2 bottom-0">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
      <Filter />
    </div>
  );
};

export default TodoList;
