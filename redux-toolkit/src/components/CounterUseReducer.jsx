import React, { useReducer } from "react";

const initialCount = 0;

const counterReducer = (count, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (count < 10) {
        count = count + 1;
      } else {
        count = 0;
      }
      break;

    case "INCREMENTBY":
      if (count < 10) {
        count = count + action.payload;
      } else {
        count = 0;
      }
      break;

    case "DECREMENT":
      if (count > 0) {
        count = count - 1;
      }
      break;

    default:
      break;
  }
  return count;
};

const CounterUseReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, initialCount);

  return (
    <div className="card">
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <p>count is {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "INCREMENTBY", payload: 2 })}>
        +2
      </button>
    </div>
  );
};

export default CounterUseReducer;
