/*
[io-algo-bas-46348a87] [Formula and Equations]

Formula and Equations (Functions)
*/

/* -------------------------------------------------------------------------- */
/*                                  Equations                                 */
/* -------------------------------------------------------------------------- */

class Equations {
  /**
 - ax^2 + bx + c = 0
 - Coefficients = a, b, c
 - Discriminant = b^2 - 4*a*c
    - If d > 0 (positive) - two roots will be real and unequal
    - If d === 0 - two roots will be real and equal to each other (repeated roots)
    - If d < 0 - two roots will be complex and each root is the complex conjugate of the other root
 */
  static rootsOfQuadraticEquation(a, b, c) {
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
}

/* -------------------------------------------------------------------------- */
/*                                 Conversions                                */
/* -------------------------------------------------------------------------- */

class Conversions {
  /**
 - 1 kilometer is approximately equal to 0.621371 miles
 */
  static kmToMiles(distanceInKm) {
    if (isNaN(distanceInKm)) {
      throw new Error(
        'Please enter a valid number for the distance in kilometers.',
      );
    }
    const parsedKmValue = parseFloat(distanceInKm);
    // Conversion factor
    const kmToMilesConversionFactor = 0.621371;
    const miles = parsedKmValue * kmToMilesConversionFactor;
    return +miles.toFixed(2);
  }

  /**
 - F = (C * 9/5) + 32
 */
  static celsiusToFahrenheit(tempInCel) {
    if (isNaN(tempInCel)) {
      throw new Error(
        'Please enter a valid number for the temperature in Celsius.',
      );
    }
    const parsedCelValue = parseFloat(tempInCel);
    const fahrenheit = (parsedCelValue * 9) / 5 + 32;
    return +fahrenheit.toFixed(2);
  }
}

function main() {
  // Equations
  // rootsOfQuadraticEquation(4, -5, -12);

  // Conversions
  // console.log(Conversions.kmToMiles(540));
  console.log(Conversions.celsiusToFahrenheit(102));
}

main();

// Execute - node .\basics\io-algo-bas-46348a87.js
