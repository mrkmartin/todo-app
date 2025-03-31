import React from "react";

const Todo = ({ todo, onDelete, onComplete, isFirst }) => {
  return (
    <div className="w-[87%] h-[10%] md:h-[15%] lg:w-[37%] lg:h-[8%] relative mb-[2px]">
      <label className="flex items-center space-x-2 cursor-pointer absolute top-[50%] left-2 transform -translate-y-1/2 md:left-5 lg:left-2">
        <input
          type="checkbox"
          checked={todo.complete}
          className="peer hidden"
          onChange={() => onComplete(todo.id)}
        />
        <div className="w-4 h-4 min-[414px]:w-5 min-[414px]:h-5 md:w-8 md:h-8 lg:w-5 lg:h-5  flex items-center justify-center rounded-full border-2 border-[hsl(236,33%,92%)] peer-checked:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] transition self-center">
          <img
            src="images/icon-check.svg"
            alt="check-icon"
            className="w-2 h-2"
          />
        </div>
      </label>
      <div
        className={`w-full h-full bg-[hsl(0,0%,98%)] pl-10 min-[375px]:pl-12 md:pl-20 lg:pl-[12%] flex justify-between items-center text-[hsl(235,19%,35%)] ${
          isFirst ? "rounded-t-md" : ""
        }`}
        style={
          todo.complete
            ? {
                textDecorationLine: "line-through",
                color: "hsl(233,11%,84%)",
              }
            : {}
        }
      >
        {todo.task}
        <button onClick={() => onDelete(todo.id)}>
          <img
            src="images/icon-cross.svg"
            alt="cross-icon"
            className="mr-5 md:mr-10 lg:mr-6 w-3 h-3 lg:w-4 lg:h-4  min-[375px]:w-4 min-[375px]:h-4 md:w-8 md:h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Todo;
