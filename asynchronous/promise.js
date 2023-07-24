/*
Promise - sebuah object yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi (fulfill) atau gagal (reject) yang berdasarkan pada operasi asynchronous dan bisa menghasilkan sebuah output.
*/

let bentengTakeshi = (nama) => {
  return new Promise((resolve, reject) => {
    console.log("--- BENTENG TAKESHI MULAI ---");
    console.log("Doakan aku ya!!");

    let rate = Math.random() * 100;

    setTimeout(() => {
      if (rate > 50) {
        resolve(`Selamat ${nama} anda berhasil menakhlukan benteng takeshi!`);
      } else {
        reject("Sayang sekali, anda gagal menakhlukan benteng takeshi");
      }
    }, 2000);
  });
};

const playFunction = () => {
  let resultFromPromise = "";
  bentengTakeshi("Yanto")
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (fulfill)
      resultFromPromise = result;
    })
    .catch((error) => {
      // Then akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error;
    })
    .finally(() => {
      // Finally akan dijalankan ketika terpenuhi atau tidak
      console.log("Game selesai");
    });
  console.log("Result:", resultFromPromise);
};

const playFunction2 = async () => {
  let resultFromPromise = "";
  await bentengTakeshi("Yanto")
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (fulfill)
      resultFromPromise = result;
    })
    .catch((error) => {
      // Then akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error;
    })
    .finally(() => {
      // Finally akan dijalankan ketika terpenuhi atau tidak
      console.log("Game selesai");
    });
  console.log("Result:", resultFromPromise);
};

const playFunction3 = async () => {
  let resultFromPromise = "";
  try {
    // Then akan dijalankan ketika terpenuhi (fulfill)
    const result = await bentengTakeshi("Yanto");
    resultFromPromise = result;
  } catch (error) {
    // Then akan dijalankan ketika tidak terpenuhi (reject)
    resultFromPromise = error;
  } finally {
    // Finally akan dijalankan ketika terpenuhi atau tidak
    console.log("Game selesai");
  }
  console.log("Result:", resultFromPromise);
};

playFunction3();
