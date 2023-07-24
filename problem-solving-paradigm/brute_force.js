function findMaxMin(array) {
  let maxValue = 0;
  let minValue = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (maxValue < array[i]) maxValue = array[i];
    if (minValue > array[i]) minValue = array[i];
  }

  //   return "max: " + maxValue + " min: " + minValue;
  //   ` -> backtick
  //   ' -> single quote
  //   " -> double quote
  // ${}

  return `max: ${maxValue} min: ${minValue}`;
}

console.log(findMaxMin([10, 7, 3, 5, 8, 2, 9]));
