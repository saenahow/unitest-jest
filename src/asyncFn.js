export const sayHelloAsync = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) resolve(`Hello ${name}`);
      reject("name is empty");
    }, 1000);
  })
}

export const sayHello = (name) => {
  if (name) {
    return `Hello ${name}`;
  }
  throw new Error("name is required");
}

export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name,
    balance
  }
}