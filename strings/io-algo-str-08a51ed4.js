/*
[io-algo-str-08a51ed4] [Title]

Write a JS program to reverse a string?
*/

/* Examples and Constraints

====================== [Example 1] ======================
Inputs - INDIA
Expected Output - AIDNI

====================== [Example 2] ======================
Inputs - Alex Doe is a Great Writer
Expected Output - retirW taerG a si eoD xelA

====================== [Example 3] ======================
Inputs - ...My Country is Great...
Expected Output - ...taerG si yrtnuoC yM... 

===================== [Constraints] =====================
*/

function reverseUsingLoop(stringData) {
  let output = '';
  for (let i = stringData.length - 1; i >= 0; i--) {
    output += stringData[i];
  }
  return output;
}

function reverseUsingInbuiltFunctions(stringData) {
  if (typeof stringData === 'string') {
    const output = stringData.split('').reverse().join('');
    return output;
  }
}

function main() {
  console.log(
    reverseUsingLoop('INDIA'),
    reverseUsingLoop('Alex Doe is a Great Writer'),
    reverseUsingLoop('...My Country is Great...'),
    '',
  );

  console.log(
    reverseUsingInbuiltFunctions('INDIA'),
    reverseUsingInbuiltFunctions('Alex Doe is a Great Writer'),
    reverseUsingInbuiltFunctions('...My Country is Great...'),
    '',
  );
}

main();

// Execute - node .\strings\io-algo-str-08a51ed4.js
