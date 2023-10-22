beforeAll(() => console.log("before all"));
afterAll(() => console.log("after all"))
beforeEach(() => console.info("Before each"))
afterEach(() => console.info("After each"))

test("test Outer", () => console.info("test outer"))

describe("inner", () => {
  beforeEach(() => console.info("Before each test inner"))
  afterEach(() => console.info("After each test inner"))

  test("test inner", () => console.info("test inner"))
})