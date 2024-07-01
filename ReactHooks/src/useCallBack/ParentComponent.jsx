import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [parentCounter, setParentCounter] = useState(0);
  const [childCounter, setChildCounter] = useState([1]);

  const incrementParentCounter = () => {
    setParentCounter(parentCounter + 1);
  };

  const functionForChild = useCallback(() => {
    console.log("function for child component");
  }, [childCounter]);

  return (
    <>
      <h1>useCallBack - Hook</h1>
      <p>Parent Counter: {parentCounter}</p>
      <button onClick={incrementParentCounter}>Increment Parent Counter</button>

      {/* <ChildComponent childCounter={childCounter} function={functionForChild} /> */}
      <ChildComponent />
    </>
  );
}

export default ParentComponent;

// useCallback

// What
// - useCallback is a React hook that returns a memoized version of a function.
// - It helps to prevent unnecessary re - renders of child components.
// - They re - render when child's dependencies change.

// Why
// - useCallback is used to optimize performance by preventing unnecessary re-renders of child components.
// - By wrapping a function with useCallback, you ensure that the function reference remains stable between re - renders, which can improve performance.

// How
// - useCallback returns a memoized version of the function.
// - It takes two arguments: the callback function and an array of dependencies.The memoized function is only recreated if one of the dependencies changes.

// Syntax
// const memoizedFunction = useCallback(
//   () => {
//     // Your function
//   },
//   [dependencies] // Array of dependencies
// );

// Note
// - useCallback should be used when passing a callback function as a prop to a child component.
// - It helps to prevent unnecessary re - renders of the child component when the callback function changes.
