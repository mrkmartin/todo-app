import React from "react";

const Header = ({ todo, setTodo, onAddTodo }) => {
  return (
    <div className="relative">
      <img
        src="images/bg-mobile-light.jpg"
        alt="bg-mobile-light"
        className="w-full"
      />
      <div className="w-[85%] flex items-center justify-between absolute left-6 top-10 md:left-12 md:top-20">
        <h2 className="uppercase text-[hsl(0,0%,98%)] lusitana-bold  tracking-[0.5em] text-xl min-[375px]:text-2xl md:text-5xl">
          Todo
        </h2>
        <button className="w-4 h-4">
          <img src="images/icon-moon.svg" alt="moon-icon" />
        </button>
      </div>

      <div>
        <label className="flex items-center space-x-2 absolute top-[57%] min-[375px]:top-[58%] left-6 min-[375px]:left-8 z-10">
          <input type="checkbox" className="peer hidden" />
          <div className="w-4 h-4 rounded-full border-2 border-[hsl(236,33%,92%)]"></div>
        </label>
        <div>
          <input
            className="w-[87%] h-[25%] absolute left-1/2 top-1/2 transform -translate-x-1/2 rounded-md pl-10"
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
