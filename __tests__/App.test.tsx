import '@testing-library/jest-dom/vitest';
import App from '../src/App';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

test("Index page render", async ()=> {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent("hello world");
});