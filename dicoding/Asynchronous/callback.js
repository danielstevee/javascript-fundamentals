

        // Mengambil function makeCoffee dan sendCoffee
        // dari file coffeee.js
        import { makeCoffee, sendCoffee } from './coffeee.js';


        // Ini dijalankan terlebih dahulu
        console.log('Saya memesan kopi di kafe.');


        // Memanggil makeCoffee()
        // Function ini menerima callback
        makeCoffee(() => {
            // setelah proses membuat kopi selesai (5 detik)
            // Kemudian callback untuk memanggil sendCoffee()
            sendCoffee(() => {

                // setelah kopi selesai diantarkan (2 detik)
                // Kemudian callback untuk memanggil console.log ini------
                console.log('Pramusaji memberikan kopi pesanan.');
                console.log('Saya mendapatkan kopi dan menghabiskannya.');

            });
        });
