let count = 0;
let mem = [];

function calculate(n) {
  count++;

  if (mem[n]) return mem[n];

  if (n <= 1) {
    mem[n] = n;
  } else {
    mem[n] = calculate(n - 1) + calculate(n - 2);
  }
  return mem[n];
}

function fibTopDown(n) {
  console.time("DP Top Down");
  const result = calculate(n);
  console.timeEnd("DP Top Down");
  return result;
}

console.log("Result:", fibTopDown(50)); // 12586269025, count 99
// console.log("Result:", fibTopDown(9)); // 34, count 17
console.log("Count:", count); // 99
