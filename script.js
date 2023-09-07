function fibonacci(num) {
  let n1 = 0, n2 = 1, n3;

  if (num === 0) console.log(n1);
  if (num === 1) console.log(n2);

  for (let i = 2; i <= num; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  console.log(n2);
}

fibonacci(1); // 1
fibonacci(5); // 5

module.exports = fibonacci;
