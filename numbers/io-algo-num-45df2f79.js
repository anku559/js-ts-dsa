/*
[io-algo-num-45df2f79] [Factorial of a Number]

Write a JS program to find the factorial of given number?
*/

/* Notes
Factorial - n! = n × (n - 1) × (n - 2) × (n - 3) × ... × 1

A factorial is a function that multiplies a number by every number below it.
  - For example 5!= 5*4*3*2*1=120.

Usage - Find the number of ways n objects can be arranged.
  - How many different ways can the letters in the word “document” be arranged? - 8! = 40,320
  - How many different ways can the letters in the word “physics” be arranged? - 7!/2! = 2,520 (due to presence of s twice)
  - How many different ways can the letters in the word “letters” be arranged? - 7!/(2!*2!) = 1,260 (due to presence of e and t twice)
 */

/* Examples and Constraints
====================== [Example 1] ======================
Inputs - 5
Expected Output - 120

====================== [Example 2] ======================
Inputs - 7
Expected Output - 5040

====================== [Example 3] ======================
Inputs - -10
Expected Output - Error: Invalid Argument
*/

function factorial(num) {
  if (num < 0) {
    throw new Error('Factorials are not defined for negative numbers');
  }

  let output = 1;
  for (let i = 1; i <= num; i += 1) {
    output *= i;
  }
  return output;
}

function main() {
  console.log(factorial(5));
  console.log(factorial(7));
  console.log(factorial(-10));
}

main();

// Execute - node .\numbers\io-algo-num-45df2f79.js

/**
Function `fnName`: `param` => `void`
- param: int

#### Worst Case Scenarios
#### Average Case Scenarios
#### Best Case Scenarios
*/
