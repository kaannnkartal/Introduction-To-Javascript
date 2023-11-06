// ! Selectors (Seciciler) - Style Ozellikleri

// ! classname, id, tag name  ..> Bir seyi yakalamak icin..

// ? getElementById : id' ye gore elementi yakalar.

// ? getElementByClassName : class ismine gore yakalar.

// ? getElementByTagName : etiket ismine gore yakalar.

// const button = document.getElementById("todoAddButton");

// console.log(button);

// * getAttribute bir elementin icerisindeki id-class-bla bla gibi yapıları cekebilir.
// * Aynı zamanda burada button.getId; diyerek de id'yi cekebilirdik.
// console.log(button.getAttribute("id"));

//console.log(button.className);
//console.log(button.getAttribute("class"));

// const classListesi = button.classList;
// console.log(classListesi[3]);
// classListesi.forEach(function (className){
//     console.log(className);
// })


// let buttonText = button.textContent;

// console.log(buttonText);


// ! Yukarıda element yakalamak icin kullandıgımız getElementById,Class,Tagname yerine
// ! CSS selector aynen cssde olduğu gibi css kodunu selector ile yakalıyoruz.
// ! Mesela querySelector("#todoClearButton") id'si todoClearButton olan elementi yakalıyoruz.
// const clearButton = document.querySelector("#todoClearButton");

// console.log(clearButton);


// const todoList = document.querySelector(".list-group");
// console.log(todoList);


// *Eğer ki querySelector kullanarak class icin select yapacaksanız, ve o classtan birden fazla var ise
// ! Bu yontem sadece ilk classı secer.
// const listItem = document.querySelector(".list-group-item");
// console.log(listItem);

//* Eğer birden fazla class var ise ve hepsini select istiyorsanız, getElementByClass kullan.
// ! Ya da querySelectorAll metodunu kullan.

// const listItem2 = document.querySelectorAll(".list-group-item");
// console.log(listItem2)

// const todoList = document.querySelectorAll("li:last-child");
// console.log(todoList);

// Ayrıca nth-child() odd-even parametresi alabilir.

// const todoList2 = Array.from(document.querySelectorAll("li:nth-child(odd)"));

// todoList2.forEach(function (listItem){
    
//     listItem.style.backgroundColor = "lightgrey";
// })



//  ? Style Ozelligi Kullanımı.



let listItem = document.querySelectorAll(".list-group-item")[0];
let list = document.querySelector(".list-group");

let clearB = document.querySelector("#todoClearButton");

// console.log(listItem);
// console.log(list);
console.log(clearB);

listItem.style.color = "red";
listItem.style.backgroundColor = "purple";
listItem.style.fontWeight = "bold";

list.style.marginTop = "60px";

clearB.style.backgroundColor = "red";
// clearB.style.marginTop = "45px";

