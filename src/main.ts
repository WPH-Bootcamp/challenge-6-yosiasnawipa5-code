// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini
import { addBook } from './functions/bookManager';
import { listBooks } from './functions/bookManager';
import { searchBook } from './functions/bookManager';

addBook({ title: "Harry Potter", author: " J.K Roling", publicationYear: 1997 });
addBook({ title: "Laskar Pelangi", author: "Andre Hirata", publicationYear: 2005 });

listBooks();
searchBook("Harry Potter")
