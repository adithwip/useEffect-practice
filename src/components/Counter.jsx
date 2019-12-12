import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert(`You clicked ${count} times!`);
    }, 3000);
  };

  return (
    <div>
      <p>You have clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Clicked me!</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={handleAlertClick}>Show Alert</button>
    </div>
  );
};

export default Counter;
