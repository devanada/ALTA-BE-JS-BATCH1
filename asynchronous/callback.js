/*
Callback -> sebuah function yang dipanggil "setelah" melakukan sebuah proses, dalam kata lain akan dipanggil setelah sebuah proses sudah berjalan.
*/

const notFound = () => {
  console.log("parameter not found");
};

const buyer1 = (message, harga) => {
  console.log("Pesan martabak dong?", message, harga);
};

const buyer2 = (message, harga) => {
  console.log("Pesan martabak dong!!!", message, harga);
};

const seller = (callback = notFound) => {
  console.log("Pesan martabak dong? ... (wait sedang di masak)");
  setTimeout(() => {
    // <~ anggaplah ini sebagai simulasi ketika sebuah proses membutuhkan waktu
    callback("", 10000);
    // buyer1("Ok, martabak sudah selesai kakak");
  }, 2000);
};

seller(buyer1);
seller(buyer2);

seller();
