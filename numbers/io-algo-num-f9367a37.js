/*
[io-algo-num-f9367a37] [Prime Numbers in Interval]

Write a JS program to check and print all Prime numbers in an interval (prompts the user to enter a starting and ending number for an interval)?
*/

/* Examples and Constraints

====================== [Example 1] ======================
Inputs - 2, 10
Expected Output - [ 2, 3, 5, 7 ]

====================== [Example 2] ======================
Inputs - 101, 120
Expected Output - [ 101, 103, 107, 109, 113 ]

====================== [Example 3] ======================
Inputs - 51, 70
Expected Output - [ 53, 59, 61, 67 ]

===================== [Constraints] =====================
*/

function primeNumberInterval(minRange, maxRange) {
  if (isNaN(minRange) || isNaN(maxRange)) {
    throw new Error('minRange and maxRange must be valid number');
  }

  if (minRange > maxRange) {
    const temp = minRange;
    minRange = maxRange;
    maxRange = temp;
  }

  if (minRange < 2) {
    throw new Error(
      'Please enter valid integers, starting number must be greater than 1',
    );
  }

  const output = [];

  for (let i = minRange; i <= maxRange; i += 1) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      output.push(i);
    }
  }

  return output;
}

function main() {
  console.log(primeNumberInterval(51, 70));
}

main();

// Execute - node .\numbers\io-algo-num-f9367a37.js
