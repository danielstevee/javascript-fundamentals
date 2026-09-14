import { doSomething } from './utils.mjs';
// import = mengambil function dari file lain


async function promiseWithAsyncAwait() {
  // async = function ini bisa menggunakan await

  try {
    // try = jalankan proses yang mungkin menghasilkan error

    console.log('Start.');
    // tampilkan "Start" terlebih dahulu


    const result = await doSomething();
    // await = tunggu Promise selesai
    // result = menampung hasil dari resolve()


    console.log(result);
    // tampilkan hasil Promise
    // result = "You did it!"


    console.log('End.');
    // dijalankan setelah await selesai

  } catch (error) {
    // catch = menangkap error dari Promise

    console.log(error.message);
    // tampilkan pesan error
  }
}


promiseWithAsyncAwait();
// jalankan function