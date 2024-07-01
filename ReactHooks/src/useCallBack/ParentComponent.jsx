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

      <ChildComponent childCounter={childCounter} function={functionForChild} />
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

// Analogy
// - Imagine you're a baker following a recipe (your React component) to bake a delicious cake (the rendered UI). The recipe calls for a specific frosting function (a callback function passed as a prop to a child component).

// Without useCallback:
// - Every time the recipe (component) re-renders (due to state changes or other reasons), a new frosting function is created, even if the recipe itself hasn't changed. This is like the baker forgetting the exact frosting recipe and having to re-create it from scratch every time they bake a cake, even if it's the same recipe. This can be inefficient, especially if the frosting function is complex.
// With useCallback:
// - You use useCallback to memorize the frosting function. This is like the baker writing down the frosting recipe in a separate notebook (the dependency array in useCallback). Now, whenever they need to make the frosting, they can refer to the notebook instead of re-creating it from scratch. useCallback only creates a new frosting function if the ingredients listed in the notebook (the dependencies) change. This improves performance and avoids unnecessary function creation.
