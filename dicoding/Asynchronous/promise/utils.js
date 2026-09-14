function promiseExecutor(resolve, reject) {

  // Tunggu 2 detik
  setTimeout(() => {

    console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

    // Menghasilkan angka random 0 sampai kurang dari 1
    const number = Math.random();

    // Kalau angka lebih dari 0.5 → berhasil
    if (number > 0.5) {
      resolve('You did it!');
    }

    // Kalau angka 0.5 atau kurang → gagal
    else {
      reject('Sorry, something went wrong!');
    }

  }, 2000);
}


export function doSomething() {

  // Membuat Promise
  return new Promise(promiseExecutor);
}