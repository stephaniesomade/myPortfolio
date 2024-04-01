import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("check that the app component renders on the page", () => {
  render(<App />);
  const tester = screen.getByText("Hey");
  expect(tester).toBeInTheDocument()
});
