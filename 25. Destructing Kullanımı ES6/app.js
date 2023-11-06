// Destructin Kullanımı

let langs = ["C#", "C++", "JavaScript", "Python"];

let lang1, lang2, lang3, lang4;

// * Bu üstteki değişkenlere langs arrayinin icindeki değerleri atamak icin:

//! OLD WAY:
lang1 = langs[0];
lang2 = langs[1];
lang3 = langs[2];
lang4 = langs[3];

// console.log(lang1, lang2, lang3, lang4);

//! New WAY: Destructing:

[lang1, lang2, lang3, lang4] = langs;
console.log(lang1, lang2, lang3, lang4);


//* Yeni bir ornek :

const hesapla = (a, b) => {
    const toplam= a + b;
    const fark = a - b
    const carpim = a * b;
    const bolum = a / b;

    const dizi = [toplam, fark, carpim, bolum];
    return dizi;
}


[a, b, c, d] = hesapla(20, 5);

console.log(a, b, c, d);



//* Objelerle ornek : 


const person = {
    firstName: "Kaan",
    lastName: "Kartal",
    salary: 5000,
    age: 23
}


// let isim, soyisim, maas, yas;

// ! Dizilerde düz parantez kullanırken, objelerde kıvırcık parantezlerle destructing yapılır.
// ! Matchleyebilmesi icin yeni variablelların ismi objenin attributeları ile birebir aynı olması gerekir. Bullshit.

let { firstName, lastName, salary, age } = person;


// ! Eğer ki attirubte isimleriyle aynı kullanmak istemiyorsak ':' koyup variable ismi verebiliriz.
let { firstName : isim, lastName : soyisim, salary : maas, age : yas} = person;
console.log(isim, soyisim, maas, yas);