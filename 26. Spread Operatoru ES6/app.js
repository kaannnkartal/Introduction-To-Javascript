// Spread Operatoru ...  : Dilimlemek demek.

let numbers = [10, 20, 30, 40];

function add(a, b, c, d) {
    console.log(a + b + c + d);
}


// ! Eski Yontem: 
add(numbers[0], numbers[1], numbers[2], numbers[3]);



// ! Yeni yontem spread '...' kullanılır.

add(...numbers);

// Diziyi dilimle ve virgülleerle ayırma.



const diller1 = ["java", "c#"];
// const diller2 = ["php", "python", diller1[0], diller1[1]];



let diller2 = ["php", "python"];


diller2.push(...diller1);

console.log(diller2);


const array1 = ["Kaan", "Kardelen", "Tülay", "Cevdet"];

const array2 = [...array1];
console.log(array2);