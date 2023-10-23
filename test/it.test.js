import { factorial } from "../src/sum";

describe("when call factorial(5))", () => {
  it("should get 120", () => {
    expect(factorial(5)).toBe(120);
  })
})