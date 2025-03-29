import React from "react";

const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <div className="w-[87%] h-12 bg-[hsl(0,0%,98%)] mt-5 m-auto text-xs flex items-center justify-center gap-3 text-[hsl(236,9%,61%)]">
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
            color:
              filter === "active" ? "hsl(220, 98%, 61%)" : "hsl(236,9%,61%)",
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
    </div>
  );
};

export default Filter;
