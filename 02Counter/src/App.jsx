import { useState } from "react";
import "./App.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const increaseValue = () => {
    if (counterValue < 20) {
      setCounterValue(counterValue + 1);
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
