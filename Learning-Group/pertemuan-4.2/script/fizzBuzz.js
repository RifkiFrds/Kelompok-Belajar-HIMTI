// function fizzBuzz dengan prameter fizz, buzz, batas
function fizzBuzz(fizz, buzz, batas) {
    // Lopp menggunkan for dari 1 sampai batas
    for (let i = 1; i <= batas; i++) {
        // Jika i habis dibagi fizz dan buzz, cetak FizzBuzz
        if (i % fizz === 0 && i % buzz === 0) {
            console.log(`${i} FizzBuzz `);
        // Jika i habis dibagi fizz, cetak Fizz
        } else if (i % fizz === 0) {
            console.log(`${i} Fizz`);
        // Jika i habis dibagi buzz, cetak Buzz
        } else if (i % buzz === 0) {
            console.log(`${i} Buzz`);
        } else {
            console.log(i);
        }
    }
}

// Panggil fungsi fizzBuzz dengan parameter 3, 5, dan batas 30
fizzBuzz(3, 5, 30);