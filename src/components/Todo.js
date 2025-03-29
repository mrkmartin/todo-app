import React from "react";

const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <div className="w-[87%] relative">
      <label className="flex items-center space-x-2 cursor-pointer absolute top-3 left-6">
        <input
          type="checkbox"
          checked={todo.complete}
          className="peer hidden"
          onChange={() => onComplete(todo.id)}
        />
        <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-[hsl(236, 9%, 61%)] peer-checked:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] transition self-center">
          <img
            src="images/icon-check.svg"
            alt="check-icon"
            className="w-2 h-2"
          />
        </div>
      </label>
      <div
        className="w-full h-full bg-[hsl(0,0%,98%)] ml-5 mb-[1px] ml-5 pl-10 p-4 text-xs flex justify-between"
        style={
          todo.complete
            ? { textDecorationLine: "line-through", color: "hsl(236, 9%, 61%)" }
            : {}
        }
      >
        {todo.task}
        <button onClick={() => onDelete(todo.id)}>
          <img
            src="images/icon-cross.svg"
            alt="cross-icon"
            className="mr-2 w-3 h-3"
          />
        </button>
      </div>
    </div>
  );
};

export default Todo;
