import { getBalance } from "../src/asyncFn";
test("mock async function", () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);
  expect(getBalance("fikri", from)).resolves.toEqual({
    name: "fikri",
    balance: 1000
  });


  expect(from.mock.calls).toHaveLength(1);
  expect(from.mock.results[0].value).resolves.toBe(1000)
});

test("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");

  await expect(getBalance("Fikri", from)).rejects.toBe("Rejected");
})