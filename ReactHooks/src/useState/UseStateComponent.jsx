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

// Analogy
// - Imagine you're a chef preparing a delicious dish (your React component). The recipe (your component code) outlines the steps and ingredients (props) needed to create the dish. However, some aspects of the dish can change dynamically, like the level of spiciness (state).

// Without useState:
// - You'd have to keep track of the spiciness level (state) outside the recipe (component) itself, perhaps on a sticky note (similar to storing state in a variable outside the component).
// - Any changes to the spiciness level (state updates) would require manually modifying the sticky note (updating the external variable) and potentially rewriting parts of the recipe (re-rendering the component) to reflect the change. This can be cumbersome and error-prone.

// With useState:
// - useState acts like a special pantry within the recipe (component) where you can store the spiciness level (state) along with the other ingredients (props).
// - The recipe can easily access and update the spiciness level (state) directly. When the spiciness level changes, the recipe automatically knows to re-adjust itself (component re-renders) to reflect the updated flavor (state). This is a more integrated and efficient approach.
