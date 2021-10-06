import React from "react";
import TestHookReducer from "./TestHookReducer.js";
import { render, fireEvent, cleanup } from "@testing-library/react";
import * as Reducer from "./reducer";
import * as ACTIONS from "./action";
// import ContextTest from "./Context/ContextTest.js";
// import { ContextDa } from "../../App.js";

afterEach(cleanup);

describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(Reducer.initialState).toEqual({ prop: false });
  });

  it("should change prop from false to true", () => {
    expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS)).toEqual({
      prop: true,
    });
  });
});

it("Reducer changes prop from false to true", () => {
    const { getByText } = render(<TestHookReducer />);
  expect(getByText(/Success:/i).textContent).toBe("Success:false");
  fireEvent.click(getByText("Dispatch Success"));
  expect(getByText(/Success:/i).textContent).toBe("Success:true");
});

// it("Context Text change detects", () => {
//   const { getByText } = render(<ContextTest />);
//   expect(getByText(/TextChange/i).textContent).toBe("sam");
//   fireEvent.click(getByText("Change Text"));
//   expect(getByText(/TextChange/i).textContent).toBe("Other Text");
// });

// it("Context value is updated by child component", () => {
//   const { container, getByText } = render(<ContextTest />);

//   expect(getByText(/TextChange/i).textContent).toBe("sam");
//   fireEvent.click(getByText("Change Text"));
//   expect(getByText(/TextChange/i).textContent).toBe("Other Text");
// });