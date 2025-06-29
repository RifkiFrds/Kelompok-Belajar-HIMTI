function kelasC(nama, matkulData, matkulAi) {
    const lulusData = matkulData >= 75;
    const lulusAi = matkulAi >= 75;

    if (lulusAi && lulusData) {
        console.log(`Selamat ${nama} kamu naik kelas`)
    } else {
        console.log(`Maaf ${nama}, kamu ga naik kelas wkwk`)
    }
    if (lulusData) {
        console.log(`Anda lulus matkul dengan nilai ${matkulData}`)
    } else {
        console.log(`Maaf anda tidak lulus mata kuliah data dengan nilai ${matkulData}`)
    }
    if (lulusAi) {
        console.log(`selamat ${nama}, kamu lulus matkul dengan nilai Ai ${matkulAi}`)
    } else {
        console.log(`maaf anda ga lulus nih matkul ai dnegan nilai ${matkulAi}`)
    }
}

kelasC('Muhamad Rifki Firdaus', 65, 76)