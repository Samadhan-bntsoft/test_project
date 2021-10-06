import React, { useContext } from "react";
import { ContextDa } from "../../../App";

const ContextTest = () => {
  const context = useContext(ContextDa);
  return (
    <div>
      <p>{context.test}</p>
      <button onClick={context.change}>Change Text</button>
    </div>
  );
}

export default ContextTest;
