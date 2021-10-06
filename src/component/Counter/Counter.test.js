import React from "react";
import Counter from "./Counter";
import { render, fireEvent, screen, getByLabelText, waitForElement, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header render with correct text", () => {
  const comp = render(<Counter />);
  const head = comp.getByTestId("hedaer");
  expect(head.textContent).toBe("Counter");
});

test("Counter initially start with 0", () => {
  const count = render(<Counter />).getByTestId("counter");
  expect(count.textContent).toBe("0");
});

test("input initial is 1", () => {
  const inputEl = render(<Counter />).getByTestId("input");
  expect(inputEl.value).toBe("1");
});

test("Addition sign", async () => {
  // const addEl = render(<Counter />).getByTestId("add");
  // expect(addEl.textContent).toBe("+");
  render(<Counter />);

    const items = await screen.findAllByText("+");
    expect(items).toHaveLength(1);

  fireEvent.click(screen.getByText("+"));
});

test("Subtraction sign", () => {
  const subEl = render(<Counter />).getByTestId("sub");
  expect(subEl.textContent).toBe("-");
});

test("Changing value of input works", () => {
  const inputEl = render(<Counter />).getByTestId("input");

  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to count", () => {
  const { getByTestId } = render(<Counter />);
  const addEl = getByTestId("add");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on subtract btn subtracts 1 from count", () => {
  const { getByTestId } = render(<Counter />);
  const subEl = getByTestId("sub");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subEl);
  expect(counterEl.textContent).toBe("-1");
});

test("counter contains correct classname", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const subEl = getByTestId("sub");
  const addEl = getByTestId("add");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addEl);
  fireEvent.click(addEl);

  expect(counterEl.className).toBe("green");
  fireEvent.click(subEl);
  fireEvent.click(subEl);
  fireEvent.click(subEl);
  expect(counterEl.className).toBe("red");
});

test("Label test", () => {

  render(<Counter />);
  const label = screen.getAllByText("label");
  expect(label)

});

test('should ', async () => {
  const { getByText } = render(<Counter />);
   waitFor(() => getByText("Satoshi"));
})
