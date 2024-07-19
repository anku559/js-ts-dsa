function addTillN(n) {
  let output = 0;

  for (let i = 1; i <= n; i += 1) {
    output += i;
  }

  return output;
}

const t1 = performance.now();
console.log(addTillN(10000000000));
const t2 = performance.now();

console.log(`Time Elapsed: ${((t2 - t1) / 1000).toFixed(2)} seconds`);
