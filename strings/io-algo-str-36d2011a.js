/*
[io-algo-str-36d2011a] [Count vowels]

Write a JS program that counts each vowel in a given string?
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

function countVowels(stringData) {
  let output = 0;

  for (const char of stringData) {
    if (
      char.toLowerCase() === 'a' ||
      char.toLowerCase() === 'e' ||
      char.toLowerCase() === 'i' ||
      char.toLowerCase() === 'o' ||
      char.toLowerCase() === 'u'
    ) {
      output += 1;
    }
  }

  return output;
}

function main() {
  console.log(countVowels('Alex Doe'));
}

main();

// Execute - node .\strings\io-algo-str-36d2011a.js
