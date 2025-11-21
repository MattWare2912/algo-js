function factorial(a) {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
}

console.log(
  "0! =", factorial(0),
  "| 1! =", factorial(1),
  "| 5! =", factorial(5),
  "| 7! =", factorial(7)
);
