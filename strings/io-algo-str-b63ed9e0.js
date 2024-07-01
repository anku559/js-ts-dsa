/*
[io-algo-str-b63ed9e0] [Count individual characters]

Write a JS program that counts each and every character in a given string (number of times that character is repeating)?
*/

/* Notes
 */

/* Examples and Constraints

====================== [Example 1] ======================
Inputs -
Expected Output -

====================== [Example 2] ======================
Inputs -
Expected Output -

====================== [Example 3] ======================
Inputs - 
Expected Output -

===================== [Constraints] =====================
*/

function countInMap(stringData, excludeSpecialChar = false) {
  const output = {};
  const specialChar = [' ', '-'];

  for (const char of stringData) {
    if (excludeSpecialChar && specialChar.includes(char)) {
      continue;
    }
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }

  return output;
}

function main() {
  console.log(countInMap('Alex Doe', true));
}

main();

// Execute - node .\strings\io-algo-str-b63ed9e0.js
