import { sayHello } from "../src/asyncFn";

test("sayHello Success", () => {
  expect(sayHello("fikri")).toBe("Hello fikri")
})

test("sayHello Failed", () => {
  expect(() => sayHello(null)).toThrow();
})

test.failing("sayHello Failed 2", () => {
  sayHello(null)
})