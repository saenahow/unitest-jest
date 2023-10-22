test("string", () => {
  const name = "Fikri Husni Mubaroq";
  expect(name).toBe("Fikri Husni Mubaroq");
  expect(name).toMatch(/aroq/);
})