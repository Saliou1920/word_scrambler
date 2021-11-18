import { scrambler } from "./scrambler";

test("scrambler", () => {
  expect(scrambler("abc")).toBe("abc");
  expect(scrambler("abcd")).toBe("acbd");
});

test("scrambler works correctly for string > 4 characters", () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
  expect(scrambler("learning")).toBe("lenairng");
});
