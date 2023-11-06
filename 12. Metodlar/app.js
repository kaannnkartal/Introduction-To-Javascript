

// ? Parametresiz ve geriye deger dondurmeyen metotlar..


// function yazdir() {
//     console.log("Kaan");
// }

// yazdir();

// ? Parametreli metotlar..

// function topla(sayi1, sayi2) {
//     console.log(sayi1 + sayi2);
// }

// topla(4, 5);

// ? Returnlu metotlar...


// function cube(sayi) {
//     return sayi ** 3;
// }



// console.log(cube(2));


// ! Function Ornekleri...



// let metin = "Suanda Yalova'da Javascript eğitimi cekmekteyim."

// let harf = prompt("Lütfen harfi giriniz");


// function letterCount(metin, harf) {
//     let count = 0;
//     for (let i = 0; i < metin.length; i++){
//         if (metin.charAt(i).toLowerCase() == harf.toLowerCase()) {
//             count++;
//         }
//     }

//     return count;
// }


// console.log(letterCount(metin, harf));


// * Mükemmel Sayı Uygulaması : 28 = 1,2,4,7,14,28  = 28*2 tam bolenleri toplamı kendisinin 2 katı



// function calculate(number) {

//     let result = 0;
//     for (let i = number; i > 0; i--){
//         if (number % i == 0) {
//             result += i;
//         }
//     }

//     if (result == number * 2) {
//         return true;
//     }

//     return false;
// }


// console.log(calculate(27));


// * Decimal to Binary Conversion



// function decimalToBinary(decimalN) {
//     let binary = "";

//     while (true) {
//         binary += (decimalN % 2).toString();
//         decimalN = Math.floor(decimalN / 2);
//         if (decimalN == 1) {
//             binary += 1;
//             break;
//         }
//     }

//     let result = reverse(binary);

//     console.log("Sonuc : " + result);
    
// }

// decimalToBinary(25);

// function reverse(binary) {
//     let reverseBinary = "";

//     for (let i = binary.length - 1; i >= 0; i--){
//         reverseBinary += binary.charAt(i);
//     }

//     return reverseBinary;
// }