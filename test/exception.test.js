import { MyException, callMe } from "../src/exception";

test("exception", () => {
  expect(() => callMe("saenahow")).toThrow(MyException);
  expect(() => callMe("saenahow")).toThrow();
  expect(() => callMe("saenahow")).toThrow("Ups my exception happens")
})