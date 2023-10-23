import { sayHelloAsync } from "../src/asyncFn"
// implementasi code dibawah akan menunggu test pertama sampai selesai,
//  lalu lanjutkan ke test 2
// test("async 1", async () => {
//    await expect(sayHelloAsync("fikri")).resolves.toBe("Hello fikri")
// })

// test("async 2", async () => {
//    await expect(sayHelloAsync("john")).resolves.toBe("Hello john")
// })


test.concurrent("concurrent 1",async () => {
  await expect(sayHelloAsync("fikri")).resolves.toBe("Hello fikri")
})

test.concurrent("concurrent 2",async () => {
  await expect(sayHelloAsync("joe")).resolves.toBe("Hello joe")
})