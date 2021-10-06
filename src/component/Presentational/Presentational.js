import React, { useState } from 'react';
// import * as ACTIONS from "./actions";
// import * as Reducer from "./reducer";

function Presentational({ title, count }) {
      const [state, setState] = useState("Initial State");

      const changeState = () => {
        setState("Initial State Changed");
      };
    return (
      <div>
        <h2>Presentational component</h2>
        <p>title : {title}</p>
        <p>Count : {count}</p>
        <h5 style={{ color: "green" }}>
          Presentational component are stateless component, only for presenting
        </h5>
        <h5 style={{ color: "red" }}>
          Container component which changes state ,plays with data{" "}
        </h5>
        <button onClick={changeState}>State Change Button</button>
        <p>{state}</p>
      </div>
    );
}

export default Presentational
