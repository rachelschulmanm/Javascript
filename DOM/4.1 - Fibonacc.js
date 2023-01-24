let Fibonacci = function (n1, n2, numfibo) {
  let arr = [n1, n2];

  for (let i = 0; i < numfibo; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr.toString();
};
console.log(Fibonacci(1, 1, 8));
