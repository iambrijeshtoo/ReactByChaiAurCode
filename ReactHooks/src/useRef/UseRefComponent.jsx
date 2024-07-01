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

// useRef()

// What
// - useRef is a built-in React hook that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue).
// - The returned ref object will persist for the full lifetime of the component, even if the component is re-rendered.

// Why
// - useRef Hook is useful when you need to access a DOM element or maintain a mutable value that should persist across re-renders.
// - It provides a way to store mutable values without triggering re-renders.
// - useRef Hook is commonly used for managing focus, timers, or integrating with third-party libraries.

// How
// - useRef returns an object with a single property called .current.
// - The .current property holds the mutable value that you can modify.
// - The mutable value will persist across re-renders, even if the component is re-rendered.
// - useRef does not cause a re-render when its .current property is modified.

// Syntax
// const referenceVariable = useRef(initialValue);

// Note
// - useRef should be imported from the 'react' package.
// - The initialValue argument can be of any type, including objects and arrays.
// - The mutable value stored in the ref object can be accessed and modified using the .current property.
// - useRef Hook should be used sparingly, as it can lead to unnecessary re-renders if the mutable value is used in the render method.

// Analogy
// - Imagine you're a painter creating a beautiful masterpiece (your React component). You have your primary tools (props and state) for most of the painting, but there are some specific things you need to keep track of throughout the process:

// Without useRef:
// - You might resort to using sticky notes (temporary variables) scattered around your canvas (component code). For example:
// - Keeping track of the last used brush size (storing a reference to a DOM element).
// - Remembering the specific canvas section you're currently working on (holding a value outside the component).
// - This approach can be messy and prone to errors, especially as your painting (component) gets more complex.

// With useRef:
// - useRef acts like a dedicated toolbox (reference object) within your workspace (component) where you can store these specialized items:
// - A reference to a specific DOM element (like a canvas input) can be held in the toolbox, allowing you to access and manipulate it later without needing to search for it on the canvas itself.
// - You can store a value specific to your painting process (like the currently selected color) within the toolbox, keeping it readily accessible throughout your work.
// - This approach is much cleaner and more organized, as everything related to these special items is centralized within the component.
