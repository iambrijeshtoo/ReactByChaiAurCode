import { useEffect, useState } from "react";

function UseEffectComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log("The count is:", counter);

    // Optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [counter]); // The dependency array

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

// useEffect()

// What
// - useEffect is a built-in React hook that allows you to perform side effects in functional components. It is used for data fetching, setting up subscriptions, or updating the DOM after rendering.

// Why
// - useEffect Hook helps you to separate side effects from the component's main logic, making the code more modular and easier to understand.
// - It allows you to perform cleanup operations when the component is unmounted or when certain dependencies change.
// - It enables you to handle asynchronous operations and update the component's state based on the results.

// How
// - useEffect takes two arguments: a function (the effect) and an optional dependency array.
// - The effect function is executed after every render, including the initial render.
// - If the dependency array is provided, the effect will only run when the dependencies change. If the dependency array is empty, the effect will only run once (similar to componentDidMount).
// - The effect function can return a cleanup function, which will be executed before the effect is re-run or before the component is unmounted

// Syntax
useEffect(() => {
  // The effect (The code you want run)

  // Optional return function for cleanup
  return () => {
    // Cleanup
  };
}, [dependencies]); // Dependency array

// Note
// - useEffect should be imported from the 'react' package.
// - The effect function should be pure and not cause any side effects (e.g., modifying the DOM directly).
// - The cleanup function (optional) should be used to perform any necessary cleanup operations before the effect is re-run or before the component is unmounted.

// Analogy
// - Imagine you're a party host (your React component) throwing a fantastic bash. You have everything planned out (your component code) – the guest list (props), the music playlist (initial state), and the decorations (rendered UI).

// Without useEffect:
// - You'd have to manually handle any additional tasks that happen outside the initial setup, like:
// - Ordering food (fetching data from an API) – You'd need to call the restaurant (make an API call) after the guests arrive (component mounts) and potentially interrupt the party flow (component rendering).
// - Adjusting the music based on the vibe (subscriptions) – You'd constantly need to check the mood of the guests (monitor a subscription) and manually change the music (modify the UI) throughout the party.
// - Cleaning up after the guests leave (cleanup function) – You'd be stuck cleaning up plates and decorations (unmounting tasks) even after everyone leaves (component unmounts). This can be inefficient and error-prone.

// With useEffect:
// - useEffect acts like your trusty party assistant. You can delegate specific tasks to it:
// - Ordering food (data fetching) – You tell your assistant to order food (make an API call) after the guests arrive (when the component mounts). This ensures a smooth flow without disrupting the party.
// - Adjusting the music based on the vibe (subscriptions) – You instruct your assistant to monitor guest requests (subscriptions) and adjust the music (update the UI) accordingly, keeping the party lively.
// - Cleaning up after the guests leave (cleanup function) – You ask your assistant to handle cleaning up (unmount tasks) once the party is over (when the component unmounts). This frees you up to focus on other things.
