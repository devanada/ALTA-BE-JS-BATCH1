const clothes = {
  item: "baju",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "celana",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "topi",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "sepatu",
  price: 46000,
  time: 10000,
};

function buyApparel(money, objItem, callback) {
  // your code here
  setTimeout(() => {
    console.log(`saya membawa uang sebesar Rp. ${money}`);
    console.log(`saya ingin membeli ${objItem.item}`);
    console.log(`dengan harga Rp. ${objItem.price}`);
    console.log(
      `dan waktu yang dibutuhkan adalah ${objItem.time / 1000} detik`
    );
    console.log("\n");

    money -= objItem.price;

    callback(money);
  }, objItem.time);
}

// callback hell -> didalam callback, ada callback lagi
buyApparel(150000, clothes, (money) => {
  buyApparel(money, pants, (money) => {
    buyApparel(money, hat, (money) => {
      buyApparel(money, shoes, (money) => {
        console.log(`sisa kembaliannya adalah Rp. ${money}`);
      });
    });
  });
});
