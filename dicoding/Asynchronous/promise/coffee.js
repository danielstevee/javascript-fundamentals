// Function untuk membuat kopi
// name = nama kopi yang dipesan
export function makeCoffee(name) {

  // makeCoffee mengembalikan sebuah Promise
  return new Promise((resolve, reject) => {

    // Waktu membuat kopi = 2000 ms = 2 detik
    const estimationTime = 2000;

    // Awalnya dianggap gagal
    let isSuccess = false;


    // Mengubah 2000 ms menjadi 2 detik
    const inSecond = Math.ceil(estimationTime / 1000);


    // Langsung dijalankan saat makeCoffee dipanggil
    console.log(
      `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
    );


    // Proses asynchronous
    // Kode di dalamnya dijalankan setelah 2 detik
    setTimeout(() => {

      // Menghasilkan angka random antara 0 sampai kurang dari 1
      const number = Math.random();


      // Jika angka lebih dari 0.3
      // proses dianggap berhasil
      if (number > 0.3) {
        isSuccess = true;
      }


      // Jika proses tidak berhasil
      if (!isSuccess) {

        // Promise menjadi REJECTED
        reject(new Error('Maaf, kopi gagal dibuatkan.'));

        // Menghentikan function
        return;
      }


      // Kalau berhasil, tampilkan pesan
      console.log('Pramusaji selesai membuat kopi.');


      // Promise menjadi FULFILLED
      // name dikirim ke .then()
      resolve(name);

    }, estimationTime);
  });
}



// Function untuk mengantarkan kopi
export function sendCoffee(name) {

  // Mengembalikan Promise
  return new Promise((resolve, reject) => {

    // Waktu mengantarkan kopi = 1000 ms = 1 detik
    const estimationTime = 1000;

    // Awalnya dianggap gagal
    let isSuccess = false;


    // Langsung dijalankan
    console.log('Pramusaji sedang mengantarkan kopi pesanan');


    // Menunggu 1 detik
    setTimeout(() => {

      // Menghasilkan angka random
      const number = Math.random();


      // Jika angka lebih dari 0.1
      // proses dianggap berhasil
      if (number > 0.1) {
        isSuccess = true;
      }


      // Jika pengantaran gagal
      if (!isSuccess) {

        // Promise menjadi REJECTED
        reject(new Error('Maaf, kopi gagal diantarkan.'));

        // Menghentikan function
        return;
      }


      // Kalau berhasil
      console.log('Pramusaji sudah sampai ke meja.');


      // Promise menjadi FULFILLED
      // name dikirim ke .then() berikutnya
      resolve(name);

    }, estimationTime);
  });
}