import React from "react";
import { useResolution } from "../useResolution";

const Filter = ({ filter, onFilter, darkTheme }) => {
  const { isMobile } = useResolution();
  return (
    <div
      className={`w-full h-[8vh] lg:h-full ${
        darkTheme ? "bg-[hsl(235,24%,19%)]" : "bg-[hsl(0,0%,98%)]"
      }  gap-5 flex items-center justify-center order-2 josefin-bold ${
        isMobile ? "rounded-md" : ""
      }`}
    >
      <button
        onClick={() => onFilter("all")}
        className={`${
          filter === "all"
            ? "text-[hsl(220,98%,61%)]"
            : darkTheme
            ? "text-[hsl(233,14%,35%)]"
            : "text-[hsl(236,9%,61%)]"
        } ${
          darkTheme
            ? "hover:text-[hsl(236,33%,92%)]"
            : "hover:text-[hsl(235,19%,35%)]"
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilter("active")}
        className={`${
          filter === "active"
            ? "text-[hsl(220,98%,61%)]"
            : darkTheme
            ? "text-[hsl(233,14%,35%)]"
            : "text-[hsl(236,9%,61%)]"
        } ${
          darkTheme
            ? "hover:text-[hsl(236,33%,92%)]"
            : "hover:text-[hsl(235,19%,35%)]"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => onFilter("complete")}
        className={`${
          filter === "complete"
            ? "text-[hsl(220,98%,61%)]"
            : darkTheme
            ? "text-[hsl(233,14%,35%)]"
            : "text-[hsl(236,9%,61%)]"
        } ${
          darkTheme
            ? "hover:text-[hsl(236,33%,92%)]"
            : "hover:text-[hsl(235,19%,35%)]"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
