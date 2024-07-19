/*
[io-algo-str-08a51ed4] [Reverse String]

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
*/

function reverseString(stringData) {
  let output = '';
  for (let i = stringData.length - 1; i >= 0; i--) {
    output += stringData[i];
  }
  return output;
}

function main() {
  console.log(implementation1('INDIA'));
  console.log(implementation2('INDIA'));
  console.log(implementation3('INDIA'));
}

main();

// Execute - node .\strings\io-algo-str-08a51ed4.js

function implementation1(stringData) {
  const output = [];
  for (let i = stringData.length - 1, j = 0; i >= 0; i--, j++) {
    output[j] = stringData[i];
  }
  return output.join('');
}

function implementation2(stringData) {
  const output = [];
  for (let i = stringData.length - 1; i >= 0; i--) {
    output.push(stringData[i]);
  }
  return output.join('');
}

function implementation3(stringData) {
  if (typeof stringData === 'string') {
    const output = stringData.split('').reverse().join('');
    return output;
  }
}
