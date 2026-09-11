//Import = Saya mau mengambil function tambah dari matematika.js.
//import{sesuatu--------------------}
import { tambah, name, email, age  } from './matematika.js'; //ini rapi

//menjalankan function tambah dengan nilai 10 dan 20
const hasil = tambah(10, 20);

console.log(hasil);
console.log(name);
console.log(email);
console.log(age);

// Menjalankan default export
//import namaBebas from './file.js'
import sapa from './matematika.js';
sapa();

// Pilih tertentu import { name, age } from './matematika.js';
// Semua import * as user from './matematika.js'; nanti manggil nya console.log(user.tambah(10, 20)); atau console.log(user.name);


