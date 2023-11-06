// Element Silmek

const todoList = document.querySelector(".list-group");
const todos =   document.querySelectorAll(".list-group-item");

// todos[0].remove();
// todos[1].remove();
console.log(todos);
//---------------------------------------

// !Parent'ın removechild metodu parametre olarak node tipinde bir child alır.
todoList.removeChild(todos[0]);


todoList.removeChild(todoList.lastElementChild);


