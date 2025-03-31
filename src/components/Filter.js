import React from "react";

const Filter = ({ filter, onFilter }) => {
  return (
    <div className="w-full h-[50%] lg:h-full bg-[hsl(0,0%,98%)]  gap-5 flex items-center justify-center order-2 josefin-bold ">
      <button
        onClick={() => onFilter("all")}
        style={{
          color: filter === "all" ? "hsl(220, 98%, 61%)" : "hsl(236,9%,61%)",
        }}
      >
        All
      </button>
      <button
        onClick={() => onFilter("active")}
        style={{
          color: filter === "active" ? "hsl(220, 98%, 61%)" : "hsl(236,9%,61%)",
        }}
      >
        Active
      </button>
      <button
        onClick={() => onFilter("complete")}
        style={{
          color:
            filter === "complete" ? "hsl(220, 98%, 61%)" : "hsl(236,9%,61%)",
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
