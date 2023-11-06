// Elementler Uzerınde Gezınme

const todoListItem = document.querySelector(".list-group-item");
const todoListItemLastChild = document.querySelector(".list-group-item:nth-child(4)");
const todoList = document.querySelector(".list-group")
const todoCard = document.querySelector(".card");

const firstRow = document.querySelectorAll(".row")[0];
// console.log(todoListItem);
// console.log(todoList);
// console.log(todoCard);

let value;

// ! Ebeveynden cocuklara erismek

// value = todoList;
// value = todoList.children;
// value = todoList.children[1];
// value = todoList.children[3].textContent = "Degisti";


// ! Cocuktan Anneye Erismek.

// value = todoListItem;
// value = todoListItem.parentElement;
// value = todoListItem.parentElement.parentElement.parentElement.parentElement;



// ! Kardesten kardese erisim.

value = todoListItem;
value = todoListItem.nextElementSibling;
value = value.nextElementSibling;
value = value.nextElementSibling;  // Bu son kardese gecti.

// ? Bir onceki kardese gecmek.

//console.log(todoListItemLastChild);

value = todoListItemLastChild;

value = todoListItemLastChild.previousElementSibling;
value = value.previousElementSibling;


// ! Ornek Rowdan asagılara in.


value = firstRow;
value = firstRow.children[0];
value = value.children[3];
// value = value.children[0];
// value = value.textContent = "Todo Listesi Baslığı Degisti";

value = value.children[2];

value = value.children[2];

value.textContent = "Todo x";
value.style.color = "blue";
value.style.backgroundColor = "black";


console.log(value);


