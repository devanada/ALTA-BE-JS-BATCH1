/*
Linear search menggunakan konsep perulangan/looping/iterasi yang mana mencari dari element pertama sampai element terakhir. Return -1 ketika target tidak ditemukan, return index/letak/posisi element ketika target ditemukan.
*/
// O(n)
function linearSearch(array, target) {
  console.time("LINEAR SEARCH");
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    // jika array index i nilainya sama dengan target, return i
    if (array[i] === target) {
      result = i;
      break;
    }
  }

  console.timeEnd("LINEAR SEARCH");
  return result;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];
const dupeSorted = array.slice().sort((a, b) => {
  return a - b;
});

console.log(linearSearch(dupeSorted, 58)); // 71
// console.log(linearSearch(array, 101)); // -1
