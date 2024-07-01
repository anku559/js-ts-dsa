/*
[io-algo-str-52249c97] [Count vowels occurrence]

Write a JS program that counts each vowel occurrence in a given string (number of times that vowel is repeating)?
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

function countInMap(stringData) {
  const output = {};

  for (const char of stringData) {
    if (
      char.toLowerCase() === 'a' ||
      char.toLowerCase() === 'e' ||
      char.toLowerCase() === 'i' ||
      char.toLowerCase() === 'o' ||
      char.toLowerCase() === 'u'
    ) {
      if (output[char]) {
        output[char] += 1;
      } else {
        output[char] = 1;
      }
    }
  }

  return output;
}

function main() {
  console.log(countInMap('AABBAABBAAEEIIDDPPCCIIOOMMMPPOOEEIIOOOUU'));
}

main();

// Execute - node .\strings\io-algo-str-52249c97.js

/**
Function `fnName`: `param` => `void`
- param: int

#### Worst Case Scenarios
#### Average Case Scenarios
#### Best Case Scenarios
*/
