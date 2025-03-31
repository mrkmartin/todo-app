import React, { useState } from "react";
import { useResolution } from "../useResolution";

const Header = ({ todo, setTodo, onAddTodo }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isfading, setIsFading] = useState(false);
  const { isMobile } = useResolution();

  return (
    <div className="relative">
      <img
        src={
          isMobile
            ? "images/bg-mobile-light.jpg"
            : "images/bg-desktop-light.jpg"
        }
        alt="bg-mobile-light"
        className="w-full"
      />
      <div className="w-[85%] lg:w-[37%] flex items-center justify-between absolute left-6 top-10 md:left-12 md:top-20 lg:left-[31%] lg:top-[20%]">
        <h2 className="uppercase text-[hsl(0,0%,98%)] josefin-bold  tracking-[0.5em] text-xl min-[375px]:text-2xl md:text-5xl lg:text-4xl">
          Todo
        </h2>
        <button
          className="w-4 h-4 md:w-7 md:h-7"
          onClick={() => {
            setIsFading(true);
            setTimeout(() => {
              setDarkTheme(!darkTheme);
              setIsFading(false);
            }, 200);
          }}
        >
          <img
            src={darkTheme ? `images/icon-sun.svg` : `images/icon-moon.svg`}
            alt="moon-icon"
            className={`w-full h-full transition-all duration-200 ease-in ${
              isfading ? "opacity-0" : "opacity-100"
            }`}
          />
        </button>
      </div>

      <div>
        <label className="flex items-center space-x-2 absolute top-[57%] min-[375px]:top-[58%] left-6 min-[375px]:left-8 md:left-[10%] lg:top-[55%] lg:left-[32%] z-10">
          <input type="checkbox" className="peer hidden" />
          <div className="w-4 h-4 md:w-8 md:h-8 lg:w-5 lg:h-5 rounded-full border-2 border-[hsl(236,33%,92%)]"></div>
        </label>
        <div>
          <input
            className="w-[87%] h-[25%] lg:w-[37%] lg:h-[18%] absolute left-1/2 top-1/2 transform -translate-x-1/2 rounded-md pl-10 md:pl-[12%] lg:pl-[4%] lg:pt-[1px] outline-0"
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
