function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let n1 = 0, n2 = 1, n3;

  for (let i = 2; i <= num; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  return n2;
}

console.log(fibonacci(1)); // 0
console.log(fibonacci(5)); // 3

module.exports = fibonacci;
