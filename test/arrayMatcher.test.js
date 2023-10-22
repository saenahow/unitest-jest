test("Array", () => {
  const names = ["Fikri", "Husni", "Mubaroq"];
  expect(names).toContain("Mubaroq");
  expect(names).toEqual(["Fikri", "Husni", "Mubaroq"]);

  const persons = [
    {
      name: "Fikri Mubaroq"
    },
    {
      name: "Asep Sudrajat"
    }
  ];
  expect(persons).toContainEqual({ name: "Asep Sudrajat" });
  expect(persons).toEqual([
    {
      name: "Fikri Mubaroq"
    },
    {
      name: "Asep Sudrajat"
    }
  ])
})