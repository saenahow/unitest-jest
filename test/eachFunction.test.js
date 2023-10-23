import { factorial } from "../src/sum"

const table = [
  {
    number: 5,
    expected: 120
  },
  {
    number: 3,
    expected: 6,
  },
  {
    number:6,
    expected: 720
  }
]

test.each(table)("test factorial(%s) should result %i", ({ number, expected }) => {
  expect(factorial(number)).toBe(expected)
})