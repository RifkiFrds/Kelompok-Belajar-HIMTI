// function kelasC dengan prameter nama, matkulData, matkulAlgoritma
function kelasC(nama, matkulData, matkulAlgoritma) {
    // Jika nilai mata kuliah Data Struktur kurang dari 75, maka tidak lulus
    if (matkulData < 75) {
        console.log(`Maaf anda tidak lulus mata kuliah Struktur Data dengan nilai ${matkulData}`);
    // Jika nilai mata kuliah Strukutr Data lebih dari atau sama dengan 75, maka lulus
    } else
        console.log(`Anda lulus mata kuliah Struktur Data dengan nilai ${matkulData}`);
    // Jika nilai mata kuliah Algoritma kurang dari 70, maka tidak lulus
   if (matkulAlgoritma < 70) {
        console.log(`Maaf tidak lulus mata kuliah Algoritma dengan nilai ${matkulAlgoritma}`);
    // Jika nilai mata kuliah Algoritma lebih dari atau sama dengan 70, maka lulus
    } else {
        console.log(`Anda lulus mata kuliah Algoritma dengan nilai ${matkulAlgoritma}`);
    }
    // Jika nilai kedua mata kuliah di atas 70, maka naik kelas
    if (matkulData >= 70 && matkulAlgoritma >= 70) {
        console.log(`Selamat ${nama}, anda Naik Kelas`)
    // Jika salah satu atau kedua nilai mata kuliah di bawah 70, maka tidak naik kelas 
    } else {
        console.log(`Maaf ${nama}, anda tidak Naik Kelas`)  
  }
}

// Panggil Fungsi dan cetak nama serta nilai kedua mata kuliah tersbut
kelasC('Rifki', 80, 85);