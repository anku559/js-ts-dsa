/*
[io-algo-num-71c14728] [Factors of Number]

Write a JS program to find factors of a number n?
*/

/* Notes
Factors of Number - The numbers which completely divides a given number are called factors of the number.
8 - 1, 2, 4, 8
27 - 1, 3, 9, 27
17 - 1, 17
 */

/* Examples and Constraints
====================== [Example 1] ======================
Inputs - 8
Expected Output - 1, 2, 4, 8

====================== [Example 2] ======================
Inputs - 17
Expected Output - 1, 17

====================== [Example 3] ======================
Inputs - 100
Expected Output - 1, 2, 4, 5, 10, 20, 25, 50, 100
*/

function findFactors(num) {
  const factors = [];
  let factorsSum = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
      factorsSum += i;
    } else {
      continue;
    }
  }

  return { factors, factorsSum };
}

function main() {
  console.log(findFactors(8));
  console.log(findFactors(17));
  console.log(findFactors(100));
}

main();

// Execute - node .\numbers\io-algo-num-71c14728.js

/**
Function `fnName`: `param` => `void`
- param: int

#### Worst Case Scenarios
#### Average Case Scenarios
#### Best Case Scenarios
*/
