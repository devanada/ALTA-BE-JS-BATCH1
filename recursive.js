function recursiveSolution(n) {
  if (n == 1) return n;
  else return n * recursiveSolution(n - 1);
}

function recursive(n) {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function iterativeSolution(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
    console.log(result);
  }
  return result;
}

console.log(recursive(5)); // 120
console.log(iterativeSolution(5)); // 120

module.exports = recursive;
