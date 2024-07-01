import { useState } from "react";

function UseStateComponent() {
  const [counter, setCounter] = useState(0);

  const incrementTheCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={incrementTheCounter}>Increment The Counter</button>
    </>
  );
}

export default UseStateComponent;

// useState()

// What
// - useState is a built-in React hook that allows you to add state to functional components. It returns a pair of values: the current state and a function to update it.

// Why
// - useState Hook provides a more flexible and efficient way to manage state in functional components compared to class components.
// - It allows you to separate state logic from the component's render method, making the code more modular and easier to understand.
// - It enables you to update state without triggering a complete re-render of the component, improving performance.

// How
// - useState takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update it.
// - The returned state value is updated whenever the update function is called, causing a re-render of the component.
// - The update function accepts a new state value or a function that returns a new state value.

// Syntax
// const [stateVariable, setStateFunction] = useState(initialState);

// Note
// - useState should be imported from the 'react' package.
// - The initial state value can be of any type, including objects and arrays.
// - The state variable and the setState function should have meaningful names that describe their purpose.

// When
// - useState Hook is useful when you need to manage local state in a functional component.
// - It is commonly used in components that need to display dynamic data or handle user interactions.
// - useState Hook can be used multiple times in a single component to manage different state variables.
// - It is recommended to use useState Hook instead of class components for new React projects.
