/*
[io-algo-bas-64764751] [Perform Arithmetic Operations]

Write a JS program to perform arithmetic operations on 2 numbers (take input from user)?
*/

/* Examples and Constraints

====================== [Example 1] ======================
Inputs - 34, 17
Expected Output -
  Addition: 51
  Subtraction: 17
  Multiplication: 578
  Division: 2

====================== [Example 2] ======================
Inputs - 100, 1000
Expected Output -
  Addition: 1100
  Subtraction: -900
  Multiplication: 100000
  Division: 0.1

====================== [Example 3] ======================
Inputs - 5.90, 6.25
Expected Output -
  Addition: 12.15
  Subtraction: -0.34999999999999964
  Multiplication: 36.875
  Division: 0.9440000000000001

===================== [Constraints] =====================
*/

function performArithmeticOperations(num1, num2) {
  return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
}

function main() {
  console.log(performArithmeticOperations(34, 17));
  console.log(performArithmeticOperations(100, 1000));
  console.log(performArithmeticOperations(5.9, 6.25));
}

main();

// Execute - node .\basics\io-algo-bas-64764751.js
