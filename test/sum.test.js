import { sum } from "../src/sum";

test("sum test 1", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})

test("sum 1,3 must be 4", () => {
  const result = sum(1, 4);
  expect(result).toBe(5);
})

test("sum(1,5) must be 5", () => {
  const result = sum(1, 5);
  expect(result).toBe(6);
})