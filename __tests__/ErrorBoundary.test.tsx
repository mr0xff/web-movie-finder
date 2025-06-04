import { test, expect, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import ErrorBoundary from '../src/components/ErrorBoundary';

test("Error ", ()=> {
  render(<ErrorBoundary />);
  expect(screen.getByLabelText("icon"));
  expect(screen.getByRole("paragraph")).toHaveTextContent(/Opps!! Ocorrou um erro !!!/);
});

test("Error component with props filled", ()=>{
  render(<ErrorBoundary message="hello world" />);
  
  expect(screen.getByLabelText("icon"));
  expect(screen.getByRole("paragraph")).toHaveTextContent("hello world");
});