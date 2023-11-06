
// function yazdir() {
//     console.log("Merhaba");
// }

// yazdir();


//! Arrow Function:

const metodIsmi = () => {
    console.log("merhaba");
}

metodIsmi();


// ? Eğer metod tek satır ise kıvırcıkları kaldırabiliriz : 

const yazdir = (name) => console.log("Merhaba " + name);

yazdir("kaan");

// ? Eğer metod parametresi de tek bir paremetre ise onun parantezleri de kaldırılabilir.

const yazdir2 = name => console.log("Merhaba " + name);

yazdir2("KAAN");

// ? Eğer returnlü ve tek bir ifade varsa return kullanmamıza gerek yok.
// ? Asagıdaki fonksiyon parametre olarak x alır ve x^3 return eder.
const kupAl = x => x ** 3;

console.log(kupAl(3));