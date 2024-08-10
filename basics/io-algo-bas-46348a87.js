/*
[io-algo-bas-46348a87] [Formula and Equations]

Formula and Equations (Functions)
*/

/* Notes
 */

/**
 - ax^2 + bx + c = 0
 - Coefficients = a, b, c
 - Discriminant = b^2 - 4*a*c
    - If d > 0 (positive) - two roots will be real and unequal
    - If d === 0 - two roots will be real and equal to each other (repeated roots)
    - If d < 0 - two roots will be complex and each root is the complex conjugate of the other root
 */
function rootsOfQuadraticEquation(a, b, c) {
  if (isNaN(a) && isNaN(b) && isNaN(c)) {
    throw new Error('Please enter valid numbers for coefficients.');
  }

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log('Two roots are real and unequal');
    console.log(`Root 1: ${root1} || Root 2: ${root2}`);
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);

    console.log(
      'Two roots will be real and equal to each other (repeated roots)',
    );
    console.log(`Roots: ${root}`);
  }

  if (discriminant < 0) {
    console.log(
      'Two roots will be complex and each root is the complex conjugate of the other root',
    );
  }
}

function main() {
  rootsOfQuadraticEquation(4, -5, -12);
}

main();

// Execute - node .\basics\io-algo-bas-46348a87.js
