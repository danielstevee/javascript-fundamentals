//export= Function tambah ini boleh digunakan oleh file lain.
//export{sesuatu------}
export function tambah(a, b) {
    //menyimpan hasil return-nya ke variabel lain contoh varibel hasil.
    return a + b;
}

const name = 'John';
const email = 'john@gmail.com';
const age = 25;
//export{sesuatu----------}
export { name, email, age };

//Export Utama--
export default function goodMorning() {
    console.log("Good morning!");
}