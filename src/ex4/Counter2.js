import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter2;
