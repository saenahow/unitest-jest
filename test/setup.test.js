import { sum } from "../src/sum";
beforeAll(() => {
  console.log("before all")
});

afterAll(() => {
  console.log("after all")

})
beforeEach(() => {
  console.info("Before each")
})

afterEach(() => {
  console.info("After each")
})

test('first test', () => {
  console.log("first test")
  expect(sum(10,10)).toBe(20)
});

test('second test', () => {
  console.log("second test")
  expect(sum(10, 10)).toBe(20)
});