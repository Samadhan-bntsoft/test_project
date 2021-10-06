import React from "react";
import ReactDOM from "react-dom";
import Presentational from './Presentational'
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup)
it("Text in state is changed when button clicked", () => {
  const { getByText } = render(<Presentational />);
  
  expect(getByText(/initial/i).textContent).toBe("Initial State");

  fireEvent.click(getByText("State Change Button"))
  expect(getByText(/initial/i).textContent).toBe("Initial State Changed");

});
