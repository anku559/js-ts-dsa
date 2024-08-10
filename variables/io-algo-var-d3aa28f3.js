/*
[io-algo-var-d3aa28f3] [Swap Variables]

Write a JS program to swap two variables?
*/

/* Notes
- Swapping variable's using temp variable

 */

/* Examples
====================== [Example 1] ======================
Inputs - 10, 20
Expected Output - 20, 10

====================== [Example 2] ======================
Inputs - 50, 100
Expected Output - 100, 50

====================== [Example 3] ======================
Inputs - 80, 50
Expected Output - 50, 80
*/

function swapUsingTemp(var1, var2) {
  console.log(`Before Swap: ${var1} | ${var2}`);
  const temp = var1;
  var1 = var2;
  var2 = temp;
  console.log(`After Swap: ${var1} | ${var2}`);
  return { var1, var2 };
}

function main() {
  const method1 = swapUsingTemp(20, 100);
  console.log(method1);
}

main();

// Execute - node .\variables\io-algo-var-d3aa28f3.js
