import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="w-[87%] h-12 bg-[hsl(0,0%,98%)] mt-5 m-auto text-xs flex items-center justify-center gap-3 text-[hsl(236,9%,61%)]">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Filter;
