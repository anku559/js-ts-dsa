/*
[io-algo-num-b8b202fc] [Perfect Number]

Write a JS program to that checks a given number is perfect or not?
*/

/* Notes
Perfect Number = If double the number == sum of the factors

Factors of 6 = 1, 2, 3, 6
  - Sum = 12
  - Double Number = 2 * 6 = 12
  - 12 == 15 (perfect number)

Factors of 8 = 1, 2, 4, 8
  - Sum = 15
  - Double Number = 2 * 8 = 16
  - 16 != 15 (not a perfect number)
*/

/* Examples and Constraints

====================== [Example 1] ======================
Inputs - 6
Expected Output - 6 is Perfect Number

====================== [Example 2] ======================
Inputs - 8
Expected Output - 8 is not a Perfect Number

====================== [Example 3] ======================
Inputs - 28
Expected Output - 28 is Perfect Number
*/

function factorsOfNumbers(num) {
  // const factors = [];
  let sumOfFactors = 0;

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      // factors.push(i);
      sumOfFactors += i;
    } else {
      continue;
    }
  }

  // return { factors, sumOfFactors };
  return sumOfFactors;
}

function main() {
  const inputNumber = 28;
  const factorSum = factorsOfNumbers(inputNumber);

  if (inputNumber * 2 === factorSum) {
    console.log(inputNumber, 'is Perfect number');
  } else {
    console.log(inputNumber, 'is not a Perfect number');
  }
}

main();

// Execute - node .\numbers\io-algo-num-b8b202fc.js
