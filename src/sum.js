export const sum = (first, second) => {
  return first + second;
}

export const factorial = (number) => {
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total = total * i;
  }
  return total;
}