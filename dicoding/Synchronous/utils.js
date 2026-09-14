function promiseExecutor(resolve, reject) {
  // Executor = function yang dijalankan oleh Promise
  // resolve = berhasil
  // reject = gagal


  setTimeout(() => {
    // tunggu selama 2 detik

    resolve('You did it!');
    // resolve = Promise berhasil
    // "You did it!" dikirim ke await
  }, 2000);
}


export function doSomething() {
  // export = function ini bisa digunakan file lain

  return new Promise(promiseExecutor);
  // buat Promise
  // Promise menjalankan promiseExecutor
}