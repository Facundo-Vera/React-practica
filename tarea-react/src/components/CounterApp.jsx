import { useState } from "react";
import ButtonProps from "./ButtonProps";

const CounterApp = () => {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1 style={{ color: "blueviolet ", fontSize: "50px" }}>{count}</h1>
      <div>
        <ButtonProps title={"+1"} action={increment} />
        <ButtonProps title={"reset"} action={reset} />
        <ButtonProps title={"-1"} action={decrement} />
      </div>
    </div>
  );
};

export default CounterApp;
