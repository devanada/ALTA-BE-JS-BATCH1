function playingDomino(cards, deck) {
  let max = 0;
  let result = [];

  cards.forEach((card) => {
    const isExist = card.some((r) => deck.includes(r));
    let total = 0;
    console.log("isExist", isExist);

    if (isExist) {
      total = card.reduce((a, b) => a + b, 0);
      console.log("total", total);
      if (total > max) {
        result = card;
        max = total;
      }
    }
  });

  return result;
}

console.log(
  playingDomino(
    [
      [6, 5],
      [3, 4],
      [2, 1],
      [3, 3],
    ],
    [4, 3]
  )
);
// [3, 4]
// console.log(
//   playingDomino(
//     [
//       [6, 5],
//       [3, 3],
//       [3, 4],
//       [2, 1],
//     ],
//     [3, 6]
//   )
// );
// [6, 5]
// console.log(
//   playingDomino(
//     [
//       [6, 6],
//       [2, 4],
//       [3, 6],
//     ],
//     [5, 1]
//   )
// );
// []
