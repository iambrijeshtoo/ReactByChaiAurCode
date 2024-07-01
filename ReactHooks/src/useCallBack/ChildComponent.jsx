import { memo } from "react";

function ChildComponent() {
  console.log("ChildComponent Rendered!!!");
  return (
    <>
      <h1>Child Component</h1>
    </>
  );
}

export default memo(ChildComponent);
