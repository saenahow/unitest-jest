import { MyException, callMe } from "../src/exception";
import { factorial } from "../src/sum";

test("exception", () => {
  expect(() => callMe("saenahow")).toThrow(MyException);
  expect(() => callMe("saenahow")).toThrow();
  expect(() => callMe("saenahow")).toThrow("Ups my exception happens")
  expect(callMe()).toBe("OK")
})

test("factorial", () => {
  expect(factorial(5)).toBe(120);
})