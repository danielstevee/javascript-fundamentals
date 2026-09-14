// Mengambil function makeCoffee dan sendCoffee
// dari file coffee.mjs
import { makeCoffee, sendCoffee } from './coffee.js';


// Nama kopi yang dipesan
const order = 'Kopi Espresso';


// Ini langsung dijalankan terlebih dahulu
console.log(`Saya memesan ${order} di kafe.`);


// Menjalankan makeCoffee()
// makeCoffee mengembalikan Promise
makeCoffee(order)
  .then(
    // JALUR BERHASIL
    // value = nilai yang dikirim oleh resolve()
    (value) => {

      // Setelah kopi berhasil dibuat,
      // lanjut menjalankan sendCoffee()
      // value berisi nama kopi
      return sendCoffee(value);
    },

    // JALUR GAGAL
    // error = Error yang dikirim oleh reject()
    (error) => {

      // Menampilkan pesan error
      console.error(error.message);

      // Lempar error lagi supaya proses berikutnya
      // tetap mengetahui bahwa terjadi error
      throw error;
    },
  )

  // .then() kedua
  // dijalankan jika Promise sebelumnya berhasil
  .then(
    // value = nilai dari resolve() sendCoffee()
    (value) => {

      // Kopi sudah sampai ke meja
      console.log(`Pramusaji memberikan ${value} pesanan.`);

      // Pesanan selesai
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },

    // Jika terjadi error pada proses sebelumnya
    (error) => {

      // Tampilkan pesan error
      console.error(error.message);

      // Lempar error lagi
      throw error;
    },
  );