import React, { useContext } from "react";
import { ContextDa } from "../App";

export function ContextData() {
  const data = useContext(ContextDa);
  return (
    <div>
      <h2>UseContext functional component passing data from parent to child</h2>
      {data.work}
    </div>
  );
}

export class ContextDatac extends React.Component {
  render() {
    return (
      <div>
        <h2>UseContext class component passing data from parent to child</h2>
        <ContextDa.Consumer>{(data) => data.work}</ContextDa.Consumer>
      </div>
    );
  }
}
