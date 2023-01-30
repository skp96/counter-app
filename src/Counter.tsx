import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState<number>(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const resetNum = () => {
    setNum(0);
  };

  return (
    <React.Fragment>
      <p data-testid="counter">{num}</p>
      <button data-testid="start" onClick={() => increaseNum()}>
        Start
      </button>
      <button data-testid="reset" onClick={() => resetNum()}>
        Reset
      </button>
    </React.Fragment>
  );
};
