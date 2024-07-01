import { useMemo, useState } from "react";

function UseMemoComponent() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200_00_00_000) {
      i++;
    }

    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <p>Counter 1: {counter1}</p>
      <button onClick={incrementCounter1}>Increment The Counter 1</button>
      <p>Event: {isEven ? "Yes" : "No"}</p>

      <p>Counter 2: {counter2}</p>
      <button onClick={incrementCounter2}>Increment The Counter 2</button>
    </>
  );
}

export default UseMemoComponent;

// useMemo()

// What
// - useMemo is a built-in React hook that allows you to memoize the result of a function and only recompute it when one of the dependencies has changed.
// - It helps optimize performance by avoiding unnecessary computations and re-renders.

// Why
// - useMemo Hook is useful when you have a computationally expensive function that depends on some state or props.
// - By wrapping the computation in useMemo, you can ensure that the function is only re-executed when necessary, improving performance.
// - useMemo Hook helps prevent unnecessary re-renders by avoiding unnecessary computations.

// How
// - useMemo takes two arguments: a function (the computation) and an array of dependencies.
// - The computation function is executed only when one of the dependencies has changed.
// - The result of the computation is memoized and returned by useMemo.
// - useMemo returns the memoized result, which can be used in the component's render method.

// Syntax
// const memoizedValue = useMemo(() => {
//   // The code that you want to run
// }, [dependencies]); // Dependency array

// Note
// - useMemo should be imported from the 'react' package.
// - The computation function should be pure (i.e., it should not have any side effects).
// - The dependency array should contain all the variables and props that the computation depends on.
// - useMemo Hook should be used sparingly, as it can lead to unnecessary re-renders if the memoized value is used in the render method.

// Analogy
// - Imagine you're a baker following a delicious cake recipe (your React component). The recipe calls for a complex frosting function (an expensive calculation) that involves several ingredients (dependencies) and takes time to prepare.

// Without useMemo:
// - Every time you bake a cake (the component re-renders), you meticulously re-measure and mix all the frosting ingredients (re-calculate the function) from scratch, even if the recipe itself hasn't changed. This can be wasteful, especially if the frosting function is time-consuming.

// With useMemo:
// - You use useMemo to be more efficient. It acts like a clever assistant who helps you prepare the frosting (calculate the function):
// - You tell your assistant the frosting recipe and the specific ingredients needed (the function and its dependencies).
// - The assistant prepares the frosting (calculates the function) only once, unless the ingredients you provide change (the dependencies change).
// - If you need the frosting again later in the recipe (during subsequent renders with the same dependencies), your assistant can quickly provide the pre-made frosting (the memoized value) without having to re-do the work. This saves time and effort.
