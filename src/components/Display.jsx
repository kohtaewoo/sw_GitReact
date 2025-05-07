import React from "react";

const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div>{input || "0"}</div>
      <div>= {result}</div>
    </div>
  );
};

export default Display;
