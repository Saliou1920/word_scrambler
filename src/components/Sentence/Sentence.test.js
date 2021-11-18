import Sentence from "./Sentence";
import { render } from "@testing-library/react";

afterEach(() => {
  jest.clearAllMocks();
});

test("renders sentence", () => {
  const div = document.createElement("div");
  render(<Sentence />, div);
});
