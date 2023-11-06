
// ! Session storagedaki veriler tarayıcı kapandığı anda silinirken
// ! Local storage alanındaki veriler bilgisayar kapansa dahi durur taa ki biz silene kadar.


// Set item değer ekler.
sessionStorage.setItem("key", "1");
sessionStorage.setItem("245", "2");
sessionStorage.setItem("312", "3");

// Değerleri cekmek icin getItem kullanırız.
let value = sessionStorage.getItem("312");

// Değer silmek icin removeItem metodu kullanılır.



// ! Storage bolumunde itemlar key ve value olarak depo edilir.
// ! Bu key ve valuelar string tiplidir. Eklerken de string olarak ekler verileri cekerken de string olarak cekilir.

// ? Array tipinde bir value kaydetsem bile bunu string olarak convert eder.
// ? Bu yüzden array olarak verip kaydedip aynı zamanda array olarak veriyi cekmek istersek:


names = ["Kaan", "Kardelen", "Tülay", "Cevdet"];


sessionStorage.setItem("names", JSON.stringify(names)); // veriler array olarak eklendi.


value = JSON.parse(sessionStorage.getItem("names"));

//console.log(typeof JSON.parse(value)); // Bu sekilde de array olarak cekmis olduk.

value.forEach(function (name){
    console.log(name);
})






