// 10-factorial.js

function factorial(n) {
  // base case: factorial of 0 or negative or NaN returns 1
  if (isNaN(n) || n <= 0) return 1;
  // recursive case
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);
console.log(factorial(arg));
