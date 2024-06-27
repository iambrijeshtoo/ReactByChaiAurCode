import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const htmlElement = (
  <a href="https://github.com" target="_blank">
    GitHub
  </a>
);

const anotherUsername = "test user 2";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUsername
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />,
  // ReactElement
  htmlElement,
  reactElement
);
