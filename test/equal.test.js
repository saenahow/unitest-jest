test("test tobe", () => {
  const name = "Fikri";
  const hello = `Hello ${name}`;
  expect(hello).toBe("Hello Fikri");
})

test("test toEqual", () => {
  const account = {
    username: "saenahow",
    password: "123"
  };
  Object.assign(account, { loggedIn: true });
  expect(account).toEqual({
    ...account,
    loggedIn: true
  })
})