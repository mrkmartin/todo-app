import React from "react";

const Header = ({ todo, setTodo, onAddTodo }) => {
  return (
    <div className="relative">
      <img
        src="images/bg-mobile-light.jpg"
        alt="bg-mobile-light"
        className="w-full"
      />
      <h2 className="uppercase text-[hsl(0,0%,98%)] lusitana-bold absolute left-5 top-10 tracking-[0.5em]">
        Todo
      </h2>
      <div>
        <label className="flex items-center space-x-2 cursor-pointer absolute top-[57%] left-6 z-10">
          <input type="checkbox" className="peer hidden" />
          <div className="w-4 h-4 rounded-full border-2 border-[hsl(236, 9%, 61%)"></div>
        </label>
        <div>
          <input
            className="w-[86%] h-[25%] absolute left-1/2 top-1/2 transform -translate-x-1/2 rounded-md pl-10 text-xs"
            type="text"
            placeholder="Create a new todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onAddTodo()}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
