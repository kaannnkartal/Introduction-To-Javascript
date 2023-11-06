// for in - for of donguleri

let names = ["Kaan", "Kardelen", "Tülay", "Cevdet"];


// names.forEach(name => console.log(name));


// for in dongusu : index numaralarını dondurur.


for (let name in names) {
    console.log(name); // burada nameleri değil 0 1 2 3 4 yazıyo.
}


// for of dongusu

for (let isim of names) {
    console.log(isim);  // burada javadaki foreach gibi. isimleri veriyor
}



