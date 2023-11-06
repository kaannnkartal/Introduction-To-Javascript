// Tüm elementleri secmek


const form = document.querySelector("#todoAddForm");
//const form = document.querySelectorAll(".card-body")[0].firstElementChild;
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#todoClearButton");
const searchInp = document.querySelector("#todoSearch");




let todos = [];

let inputSearch = "";



function removeTodoToUI(e) {
    
    checkTodos();
    if (e.target.className == "fa fa-remove") {
        console.log(e.target.parentNode.parentNode);

        const deletedItem = e.target.parentNode.parentNode;
        
        
        deletedItem.remove();
        // Storagedan silmek

        removeTodoToStorage(deletedItem.textContent);
        
    }
}

function removeTodoToStorage(removeValue) {
    JSON.parse(localStorage.getItem("todos")).forEach(function (item, index) {
        if (item === removeValue) {
            
            todos.splice(index, 1);
            
        }
    });

    
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeAllTodo() {
    
   
    localStorage.removeItem("todos");
    checkTodos();

    // // console.log(todoList.children);
    // // console.log(todoList.childNodes);

    // // let len = todoList.childNodes.length;
    // // for (let i = 0; i < len; i++){
    // //     console.log(listItem);
    // //     todoList.removeChild(listItem);
    // // }
    
    // todoList.childNodes.forEach(function (listItem) {
    //     listItem.remove();
    //     console.log("xd");
    // })
    

    //  const todoListesi = document.querySelectorAll(".list-group-item");

    // if (todoListesi == todoList.childNodes) {
    //     console.log("Evet esit");
    // }
    // else {
    //     console.log("Burası todoListesi : ");
    //     console.log(todoListesi);
    //     console.log("Burası childrens");
    //     console.log(todoList.children);
    // }

    Array.from(todoList.children).forEach(function (listItem) {
        listItem.remove();
    })
    // if (todoListesi.length > 0) {
    //     console.log("Liste İteml : " + todoListesi);
    //     todoListesi.forEach(function (todo) {
    //         todo.remove();
    //     })
    // }
    // else {
    //     showAlert("warning", "  Silmek icin en az bir todo olmalıdır.")
    // }

    
     
}

function filter(e) {


    inputSearch = e.target.value.trim();
    const todoListesi = document.querySelectorAll(".list-group-item");

    // if (todoListesi == Array.from(todoList.children)) {
    //     console.log("YESSSSSS");
    // }
    // else {
    //     console.log("NOOOOO");
    // }


    console.log(inputSearch);
    if (inputSearch.length > 0) {
        Array.from(todoList.children).forEach(function (li) {

            console.log(li.textContent);
            if (li.textContent.trim().includes(inputSearch)) {
                li.setAttribute("style", "display : block");
            }
            else {
                li.setAttribute("style", "display : none !important");
            }
        })
    }
    else {
        Array.from(todoList.children).forEach(function (li) { 
            li.setAttribute("style", "display : block");
        })
    }

}

// function filter(e) {
//     const filterValue = e.target.value.toLowerCase().trim();
//     const todoListesi = document.querySelectorAll(".list-group-item");

//     console.log(filterValue);
//     if (todoListesi.length > 0) {
//         todoListesi.forEach(function (todo) {
//             console.log(todo.textContent);
//             if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
//                 //
//                 todo.setAttribute("style", "display : block");
//             } else {
//                 todo.setAttribute("style", "display : none !important");
//             }
//         });

//     } else {
//         console.log("XD");
//         showAlert("warning", "Filtreleme yapmak için en az bir todo olmalıdır!");
//     }
// }

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    todoList.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", removeAllTodo);
    searchInp.addEventListener("keyup", filter);

}


function pageLoaded() {
    //todoList = JSON.parse(text)
    
    if (localStorage.getItem("todos") != null) {
        JSON.parse(localStorage.getItem("todos")).forEach(function (value) {
            addTodoToUI(value);
        })
    }
    
    
}

function addTodo(e) {

    
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("warning", "Lütfen değer giriniz")
    }
    else {
        // Arayüze Ekleme
        addTodoToUI(inputText)
        // Storage Ekleme
        addTodoToStorage(inputText);

        showAlert("success", "helal");
         
    }
    
    e.preventDefault();
    
    
    
}




function addTodoToUI(inputText) {

    
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.innerHTML = inputText;


    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";


    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);


    addInput.value = "";
}


function addTodoToStorage(value){

    checkTodos();
    

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function showAlert(type,text) {
    
    const div = document.createElement("div");
    // div.className = "alert alert" + type;
    div.className = `alert alert-${type}`; // litirel template
    
    div.textContent = text;

    firstCardBody.appendChild(div);


    setTimeout(function(){
        div.remove();
    }, 2500);
}


function checkTodos() {
    if (localStorage.getItem("todos") === null) {
        todos = [];

    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}


runEvents();

