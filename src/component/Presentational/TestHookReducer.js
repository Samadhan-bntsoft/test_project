import React, { useReducer,useState } from "react";
import * as ACTIONS from "./action";
import * as Reducer from "./reducer";


const TestHookReducer = () => {
  const [reducerState, dispatch] = useReducer(
    Reducer.Reducer1,
    Reducer.initialState
  );


  const dispatchActionSuccess = () => {
    if (!reducerState.prop) {
      dispatch(ACTIONS.SUCCESS);
    } else {
      dispatch(ACTIONS.FAILURE);
    }
  };

  return (

      <div>
        <div>
          {reducerState.prop ? <p>Success:true</p> : <p>Success:false</p>}
        </div>
        <button onClick={dispatchActionSuccess}>
          {reducerState.prop ? "Dispatch Failure" : "Dispatch Success"}
        </button>
      </div>
  );
};

export default TestHookReducer;
