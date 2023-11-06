
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i += 2){
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log("Kaan");
//     }
//     else {
//         console.log("Kartal");
//     }
// }

// let sonuc = 0;

// for (let i = 50; i > 0; i--){
//     sonuc += i;
// }

// console.log(" Toplam " + sonuc);



// ? While Dongusu  :

// let sayac = 1;

// while (sayac <= 10) {
    
//     console.log(sayac);

//     sayac++;
// }


// ! Carpım Tablosu Uygulaması.


// for (let i = 1; i < 10; i++){
//     for (let j = 1; j < 10; j++){
//         console.log(i + " x " + j + " = " + i * j);
//     }
// }

// ! Asal Sayı Bulmna Uygulaması.

// let sayi = Number(prompt("Lütfen Sayıyı Giriniz "))

// let flag = true;

// for (let i = parseInt(sayi/2) ; i > 1; i--) {
    
//     if (sayi % i == 0) {
//         debugger;
//         flag = false;
//         break;
//     }
// }


// if (flag) {
//     console.log("Sayı Asal!")
// }
// else {
//     console.log("Sayı asal değil!");
// }


// ! Armstong Sayı Uygulaması. (Armstong sayının digit küpleri kendisine esit oalcak.)


let sayi = prompt("Sayı Giriniz:");


let toplam = 0;
for (let i = 0; i < sayi.length; i++){
    toplam += parseInt(sayi.charAt(i)) ** 3;
}

if (toplam == sayi) {
    alert("Sayı Armonstong");
}
else {
    alert("Sayı Armonstong Değil!");
}

