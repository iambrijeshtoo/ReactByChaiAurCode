import React from "react";
import ReactDOM from "react-dom/client";
import ParentComponent from "./useCallBack/ParentComponent";
import UseRefComponent from "./useRef/UseRefComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ParentComponent /> */}
    <UseRefComponent />
  </React.StrictMode>
);
