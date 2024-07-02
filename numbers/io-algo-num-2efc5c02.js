/*
[io-algo-num-2efc5c02] [Digit Display Reverse]

Write a JS program to display digits of number in reverse order?
*/

/* Notes
- Suppose a number 1724
For 4 - 1724 % 10 = 4 | 1724 / 10 = 172 (integer division)
For 2 - 172 % 10 = 2 | 172 / 10 = 17 (integer division)
For 7 - 17 % 10 = 7 | 17 / 10 = 1 (integer division)
For 1 - 1 % 10 = 1 | 1 / 10 = 0 (integer division)
 */

/* Examples and Constraints

====================== [Example 1] ======================
Inputs - 1724
Expected Output - 4, 2, 7, 1

====================== [Example 2] ======================
Inputs - 54214
Expected Output - 4, 1, 2, 4, 5

====================== [Example 3] ======================
Inputs - 102412
Expected Output - 2, 1, 4, 2, 0, 1

===================== [Constraints] =====================
*/

function reverseDigit(num) {
  const reverseArray = [];
  let sumOfDigits = 0;
  while (num > 0) {
    const unitPlace = num % 10;
    reverseArray.push(unitPlace);
    num = Math.floor(num / 10);
    sumOfDigits += unitPlace;
  }
  return { reverse: reverseArray, sum: sumOfDigits };
}

function main() {
  console.log(reverseDigit(123));
  console.log(reverseDigit(342156));
  console.log(reverseDigit(67890));
}

main();

// Execute - node .\numbers\io-algo-num-2efc5c02.js
