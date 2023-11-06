// Map ----> key - value.



const map1 = new Map();

// Değer koymak icin set kullanılır.

// map1.set(1, "kaan");
// map1.set(true, 5);
// map1.set(2, value)


map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(6, "Ankara");
map1.set(1, "Adana");

// Değer cekmek icin get metodu kullanılır.

// console.log(map1.get(6));

//value = map1.size;

// value = map1.delete(34); // true false doner.

// value = map1.size;

// Mapin icerisinde su değer var mı ? "has" metodu.


// value = map1.has(34);



// ! Map üzerinde for of ile donebilir.

// for (let [key,value] of map1) {  // Destructing kullanımı var.
//     console.log(key,value);
// }


//! For each ile donmek :
// const keys = Array.from(map1.keys());

// keys.forEach((key) => {
//     console.log(key, map1.get(key));
// })


// !for of kullanılabilir.

for (let key of map1.keys()) {
    console.log(key);
}
// console.log(keys);

// console.log(value);
