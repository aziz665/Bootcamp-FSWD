// Fungsi untuk membuat array dengan angka acak
function generateArray(n, min, max) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// Fungsi untuk membagi array berdasarkan indeks genap dan ganjil
function splitArray(inputArr) {
    let arrGenap = [];
    let arrGanjil = [];

    for(let i = 0; i < inputArr.length; i++) {
        if (i % 2 === 0) {
            arrGenap.push(inputArr[i]);
        } else {
            arrGanjil.push(inputArr[i]);
        }
    }

    return { arrGenap, arrGanjil };
}

// Fungsi untuk menghitung statistik (min, max, total, rata-rata)
function calculateStats(array) {
    let min = array[0];
    let max = array[0];
    let total = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }

        if(array[i] > max) {
            max = array[i];
        }

        total += array[i];
    }

    let avg = total / array.length;

    return {min, max, total, avg};
}

// Fungsi untuk membandingkan statistik dari dua array
function compareStats(statsGenap, statsGanjil) {
    let comparison = {};

    comparison.min = (statsGenap.min > statsGanjil.min) ? 'genap' : (statsGenap.min < statsGanjil.min) ? 'ganjil' : 'sama';
    comparison.max = (statsGenap.max > statsGanjil.max) ? 'genap' : (statsGenap.max < statsGanjil.max) ? 'ganjil' : 'sama';
    comparison.total = (statsGenap.total > statsGanjil.total) ? 'genap' : (statsGenap.total < statsGanjil.total) ? 'ganjil' : 'sama';
    comparison.avg = (statsGenap.avg > statsGanjil.avg) ? 'genap' : (statsGenap.avg < statsGanjil.avg) ? 'ganjil' : 'sama';

    return comparison;
}

// Menggunakan fungsi-fungsi di atas
let arr = generateArray(100, 1, 50);
let { arrGenap, arrGanjil } = splitArray(arr);
let statsGenap = calculateStats(arrGenap);
let statsGanjil = calculateStats(arrGanjil);
let comparison = compareStats(statsGenap, statsGanjil);

console.log("Array Awal:", arr);
console.log("Array Genap:", arrGenap);
console.log("Array Ganjil:", arrGanjil);
console.log("Statistik Array Genap:", statsGenap);
console.log("Statistik Array Ganjil:", statsGanjil);
console.log("Perbandingan:", comparison);
