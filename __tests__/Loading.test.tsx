import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Loading from "../src/components/Loading";

test("Loading component", ()=>{
  render(<Loading />);
  
  const loading = screen.getByLabelText("loading");
  const icon = screen.getByLabelText("icon");

  expect(icon);
  expect(loading).toHaveTextContent("Carregando ...");
})