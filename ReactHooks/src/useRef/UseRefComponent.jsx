import { useEffect, useRef, useState } from "react";

function UseRefComponent() {
  const [counter, setCounter] = useState(0);
  const referenceCount = useRef(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
    referenceCount.current++;

    console.log("State:", counter);
    console.log("Ref:", referenceCount.current);
  };

  return (
    <div>
      Count: {counter}
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default UseRefComponent;
