/*
[io-algo-num-d148f8b5] [Prime Numbers]

Write a JS program to that checks a given number is Prime or not?
*/

/* Notes
If a number is divisible by 1 and itself
- eg: 2, 3, 5, 7, 11, 13, 17

Why 1 is not Prime Number?
- 1 has only 1 factor.
- For a number to be classified as a prime number, it should have exactly two factors.
- Since 1 has less than two factors, it is not a prime number.

Mental Model - Dividing number by all the smaller numbers and check if it is divided by 1 and itself

Approach 2 - Square Root
int sqrtNum = sqrt(num);
i = 2; i <= sqrtNum;
- If num is divisible by any number between 2 and its square root, it's not prime
 */

/* Examples
====================== [Example 1] ======================
Inputs - 4
Expected Output - Not a Prime Number

====================== [Example 2] ======================
Inputs - 17
Expected Output - Prime Number

====================== [Example 3] ======================
Inputs - 19
Expected Output - Prime Number
*/

function checkPrimeNumber(num) {
  if (num <= 0) {
    throw new Error('0 or negative numbers do not have prime numbers.');
  }

  if (num === 1) {
    throw new Error('1 is not a prime number.');
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/*
 *
 *
 */

/**
 * @description
 - The loop runs from 2 to the square root of num (Math.sqrt(num))
 - Why? - A number is not prime, it must have a factor less than or equal to its square root
 *
 * @param {*} num
 * @return {*}
 */
function checkPrimeNumberOptimized(num) {
  if (num <= 0) {
    throw new Error('0 or negative numbers do not have prime numbers.');
  }

  if (num === 1) {
    throw new Error('1 is not a prime number.');
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  const inputNumber = 3;
  if (checkPrimeNumberOptimized(inputNumber)) {
    console.log(`${inputNumber} is a Prime Number`);
  } else {
    console.log(`${inputNumber} is not a Prime Number`);
  }
}

main();

// Execute - node .\numbers\io-algo-num-d148f8b5.js
