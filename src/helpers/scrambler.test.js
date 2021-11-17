import { scrambler } from "./scrambler";

test("scrambler", () => {
  expect(scrambler("abc")).toBe("abc");
  expect(scrambler("abcd")).toBe("acbd");
});
