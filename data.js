const nama = "ramadanar";
let usia = 50;

function generateBiodata() {
    if (usia > 10 && usia < 18) {
        console.log('anda remaja');
    } 
    else if (usia > 18 && usia < 30) {
        console.log('anda dewasa');
    }
    else if (usia > 30) {
        console.log('ah lu mah tuwir bro');
    }
    else if (usia > 2 && usia < 10) {
        console.log('anda anak anak');
    }
    else {
        console.log('lu masih bayik');
    }
}

console.log(nama);
console.log(usia);

generateBiodata();