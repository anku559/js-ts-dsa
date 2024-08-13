/*
[io-algo-bas-13ee29d0] [Multiplication Table]

Write a JS program to print multiplication table of the number n?
*/

/* Examples and Constraints

====================== [Example 1] ======================
Inputs - 5
Expected Output - Multiplication Table of 5 till n 

====================== [Example 2] ======================
Inputs - 10
Expected Output - Multiplication Table of 10 till n

====================== [Example 3] ======================
Inputs - 20
Expected Output - Multiplication Table of 20 till n
*/

function printMultiplicationTable(tableOf, till = 20) {
  if (isNaN(tableOf) || isNaN(till)) {
    throw new Error('tableOf and till must be valid number');
  }

  for (let i = 1; i <= till; i += 1) {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`);
  }
}

function main() {
  printMultiplicationTable(5, 10);
}

main();

// Execute - node .\basics\io-algo-bas-13ee29d0.js
