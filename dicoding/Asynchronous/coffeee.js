// Function untuk membuat kopi
// callback = function yang akan dijalankan setelah kopi selesai dibuat
export function makeCoffee(callback) {

    // Waktu yang dibutuhkan untuk membuat kopi = 5000 ms
    // 5000 ms = 5 detik
    const estimationTime = 5000;

    // Mengubah 5000 ms menjadi 5 detik
    const inSecond = Math.ceil(estimationTime / 1000);

    // Ini langsung dijalankan
    // Tidak menunggu 5 detik
    console.log(
        `Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`
    );

    // Kode di dalam setTimeout baru dijalankan
    // setelah 5 detik
    setTimeout(() => {

        // Setelah 5 detik, kopi selesai dibuat
        console.log('Pramusaji selesai membuat kopi.');

        // Menjalankan callback
        // Callback ini akan melanjutkan ke proses berikutnya
        callback();

    }, estimationTime);
}


// Function untuk mengantarkan kopi
// callback = function yang akan dijalankan setelah kopi sampai
export function sendCoffee(callback) {

    // Waktu yang dibutuhkan untuk mengantarkan kopi = 2000 ms
    // 2000 ms = 2 detik
    const estimationTime = 2000;

    // Ini langsung dijalankan
    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    // Isi setTimeout dijalankan setelah 2 detik
    setTimeout(() => {

        // Setelah 2 detik, kopi sampai ke meja
        console.log('Pramusaji sudah sampai ke meja.');

        // Menjalankan callback
        // Callback ini akan melanjutkan ke proses terakhir
        callback();

    }, estimationTime);
}