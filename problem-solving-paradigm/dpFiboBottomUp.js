let count = 0;
let mem = [];

function fibBottomUp(n) {
  console.time("DP Bottop Up");

  for (let i = 0; i <= n; i++) {
    count++;
    if (i <= 1) {
      mem[i] = i;
    } else {
      mem[i] = mem[i - 1] + mem[i - 2];
    }
  }

  console.timeEnd("DP Bottop Up");
  return mem[n];
}

// console.log("Result:", fibBottomUp(50)); // 12586269025, count 51
console.log("Result:", fibBottomUp(9)); // 34, count 10
console.log("Count:", count); // 51

/*
Top Down vs Bottom Up
- Tidak bisa ditentukan mending mana, karena ada kelebihan dan juga kekurangan di kedua pendekatan tersebut
- Bottop Up = Punya kecenderungan menyelesaikan lebih dari seharusnya, misal di fibonacci, maka punya kecenderungan kita telah menghitung nilai-nilai sebelumnya yang lebih kecil, namun di beberapa kasus, ada kondisi dimana sebenarnya kita tidak perlu menghitung seluruh data jika memang tidak dibutuhkan
- Top Down = lebih rekursif, jadi ada tendensi untuk melakukan perhitungan yang lebih berat
*/
