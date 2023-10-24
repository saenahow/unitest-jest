import { calculateAndReturn } from "../src/sum";

test("test calculate", () => {
  const callback = jest.fn();

  calculate([10, 20, 30], callback)
  calculate([10, 20, 30, 40], callback)

  // The mock function was called twice
  expect(callback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 60
  expect(callback.mock.calls[0][0]).toBe(60);

  // The first argument of the first call to the function was 100
  expect(callback.mock.calls[1][0]).toBe(100);

  // callback.mock.calls[calls ke berapa][parameter]
})

test("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndReturn([10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(80);

  console.log(callback.mock.results);
  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
})

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateAndReturn([10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

  console.log(callback.mock.results);
  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(100);
})

