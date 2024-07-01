/*
[io-algo-num-d1c9304d] [Sum till n]

Write a JS program which sums up all the given numbers till n?
*/

/* Notes
Sum of N natural numbers formula - (n * (n + 1)) / 2
*/

/* Examples and Constraints
====================== [Example 1] ======================
Inputs - 10
Expected Output - 55

====================== [Example 2] ======================
Inputs - 50
Expected Output - 1275

====================== [Example 3] ======================
Inputs - 100
Expected Output - 5050
*/

function sumUsingLoop(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}

function sumUsingFormula(n) {
  return (n * (n + 1)) / 2;
}

function main() {
  console.log(sumUsingLoop(10));
  console.log(sumUsingFormula(10));

  console.log(sumUsingLoop(50));
  console.log(sumUsingFormula(50));

  console.log(sumUsingLoop(100));
  console.log(sumUsingFormula(100));
}

main();

// Execute - node .\numbers\io-algo-num-d1c9304d.js
