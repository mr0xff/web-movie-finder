import { test, expect, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import Button from '../src/components/Button';

test("Button component", ()=> {
  const fn = vi.fn();
  
  render(<Button onClick={fn}>click me</Button>);
  
  const button = screen.getByRole("button");
  
  fireEvent.click(button);

  expect(button).toHaveTextContent("click me");
  expect(fn).toHaveBeenCalled();
});