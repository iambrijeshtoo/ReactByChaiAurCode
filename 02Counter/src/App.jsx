// Video: https://youtu.be/tOYkV6Yhrhs?si=3MIJotq9el084sVT

import { useState } from "react";
import "./App.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const increaseValue = () => {
    if (counterValue < 20) {
      // setCounterValue(counterValue + 1);

      // NOTE: React update the state value in bunch. When you give same task to the react to do multiple times. It won't update the state value as a task finished. Rather than it will give you final value when all the same task are executed.

      // setCounterValue(counterValue + 1);
      // setCounterValue(counterValue + 1);
      // setCounterValue(counterValue + 1);
      // setCounterValue(counterValue + 1);

      setCounterValue((prevCounterValue) => prevCounterValue + 1);
      setCounterValue((prevCounterValue) => prevCounterValue + 1);
      setCounterValue((prevCounterValue) => prevCounterValue + 1);
      setCounterValue((prevCounterValue) => prevCounterValue + 1);
    }
  };

  const decreaseValue = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counterValue}</h2>

      <button onClick={increaseValue}>Increased value</button>
      <br />
      <button onClick={decreaseValue}>Decreased value</button>
    </>
  );
}

export default App;
