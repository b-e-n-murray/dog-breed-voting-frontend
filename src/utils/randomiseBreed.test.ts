import { randomiseBreed } from "./randomiseBreed";

test("values returned by randomiseBreed are different", () => {
  const [val1, val2] = randomiseBreed();
  expect(val1 !== val2).toBe(true);
});

test("values returned by randomiseBreed are less than 181", () => {
  const [val1, val2] = randomiseBreed();
  expect(val1).toBeLessThan(181);
  expect(val2).toBeLessThan(181);
});
