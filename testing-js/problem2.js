function simpleEquations(a, b, c) {
  for (let x = 0; x < a; x++) {
    for (let y = 0; y < a; y++) {
      for (let z = 0; z < a; z++) {
        const equation1 = x + y + z === a;
        const equation2 = x * y * z === b;
        const equation3 = x ** 2 + y ** 2 + z ** 2 === c;
        const isMatch = equation1 && equation2 && equation3;

        /*
        if (isMatch)

        if (equation1 && equation2 && equation3)

        if (equation1) {
          if (equation2) {
            if (equation3) {

            }
          }
        }
        */
        if (isMatch) return `${x} ${y} ${z}`;
      }
    }
  }
  return "no solution";
}

module.exports = simpleEquations;
