import '@testing-library/jest-dom/vitest';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

test("main page", async ()=> {
  render(<App />);
  
  expect(screen.getByRole("button")).toHaveTextContent("click me");
  expect(screen.getByRole("heading")).toHaveTextContent("hello world");
});