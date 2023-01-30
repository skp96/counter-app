import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

test("renders counter number 0", () => {
  render(<Counter />);
  const input = screen.getByTestId("counter");
  expect(input).toHaveTextContent("0");
});

test("render a button", () => {
  render(<Counter />);
  const button = screen.getByTestId("start");
  expect(button).toBeDefined();
});

test("name button start", () => {
  render(<Counter />);
  const button = screen.getByTestId("start");
  expect(button).toHaveTextContent("Start");
});

test("when button is clicked, counter increases from 0 to 1", async () => {
  render(<Counter />);

  const button = screen.getByTestId("start");
  await userEvent.click(button);

  const counter = screen.getByText("1");
  expect(counter).toHaveTextContent("1");
});

test("when button is clicked twice, counter increases from 0 to 2", async () => {
  render(<Counter />);

  const button = screen.getByTestId("start");
  await userEvent.click(button);
  await userEvent.click(button);

  const counter = screen.getByText("2");
  expect(counter).toHaveTextContent("2");
});

test("when a reset button is clicked, count resets to 0", async () => {
  render(<Counter />);

  const startButton = screen.getByTestId("start");
  await userEvent.click(startButton);

  const resetButton = screen.getByTestId("reset");
  await userEvent.click(resetButton);

  const counter = screen.getByTestId("counter");
  expect(counter).toHaveTextContent("0");
});

test("display previous counter", async () => {
  render(<Counter />);

  const previousCounter = screen.getByTestId("previous-count");
  expect(previousCounter).toBeInTheDocument();
  expect(previousCounter).toHaveTextContent("");
});

test("display previous counter as 0 when counter is increased to 1", async () => {
  render(<Counter />);

  const startButton = screen.getByTestId("start");
  await userEvent.click(startButton);

  const previousCounter = screen.getByTestId("previous-count");
  expect(previousCounter).toHaveTextContent("0");
});
