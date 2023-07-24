let jual_kendaraan = [
  {
    title: "Rubicon",
    deskripsi: "Minus plat bodong",
    harga: 300,
    lokasi: "Indonesia",
  },
  {
    title: "Harley",
    deskripsi: "Dibeli pakai uang rakyat",
    harga: 150,
    lokasi: "Indonesia",
  },
  {
    title: "Beat emak-emak",
    deskripsi: "Minus gores dikit karena keseringan belok dadakan",
    harga: 50,
    lokasi: "Indonesia",
  },
];

jual_kendaraan.forEach((kendaraan, index) => {
  kendaraan.id = index + 1;
});

console.log(jual_kendaraan);

const cobaCoba = jual_kendaraan.map((kendaraan) => {
  return {
    title: kendaraan.title,
    deskripsi: kendaraan.deskripsi,
    id: kendaraan.id,
  };
});

console.log(cobaCoba);
