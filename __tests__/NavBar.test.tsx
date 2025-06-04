import { test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import NavBar from '../src/components/NavBar';
import RouteContainerTest from './RouteContainerTest';

test("NavBar Component ", ()=> {
  render(<RouteContainerTest component={<NavBar />} />);
  expect(screen.getByLabelText("navlogo")).toHaveTextContent("MovieFinder");
  expect(screen.getByLabelText("search-input")).toHaveLength(2);
});