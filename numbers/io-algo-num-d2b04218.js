/*
[io-algo-num-d2b04218] [Fibonacci Sequence]

Write a JS program to print the Fibonacci Sequence?
*/

/* Notes
Fibonacci sequence: Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
 */

function printFibonacciTillN(n = 20) {
  const fib = [];

  while (fib.length < n) {
    if (fib.length === 0) {
      fib.push(0);
    } else if (fib.length === 1) {
      fib.push(1);
    } else {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
  }

  return fib;
}

function main() {
  console.log(printFibonacciTillN());
}

main();

// Execute - node .\numbers\io-algo-num-d2b04218.js
