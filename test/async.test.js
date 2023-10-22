import { sayHelloAsync } from "../src/asyncFn";

test("test async function", async () => {
  const name = await sayHelloAsync("fikri");
  expect(name).toBe("Hello fikri");
})

test("test async matchers", async () => {
  await expect(sayHelloAsync("Fikri")).resolves.toBe("Hello Fikri");
  await expect(sayHelloAsync()).rejects.toBe("name is empty");
})