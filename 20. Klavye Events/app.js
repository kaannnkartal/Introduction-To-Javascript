// Klavye Eventları

// keypress
// keydown
// keyup

//! Keypress harf ve sayılardan tetiklenen event türüdür. Alt tab shift ok tuslarını yakalamaz.
//! Keydown klavyedeki tüm her şeyi algılayan bir eventtır. Alt, tab, capslock, yon tusları her biri icin calısır.
//! Keyup : Tustan elini kaldırdıgında calısan bir event.

document.addEventListener("keydown", run);


function run(e) {
    console.log(e.keyCode);
    // console.log(e.keyCode);  ascii code

    if (e.keyCode == 116) {
        e.preventDefault();
        alert('Sayfa yenilenme engellendi!');
    }     
}



value = document.querySelector(".card-header");

cardTitle = value.children[0];

console.log(cardTitle);


const inpArea = document.querySelector("#todoName");
const todoBtn = document.querySelector("#todoAddButton");

let text = "";

inpArea.addEventListener("keydown", setTitle);

todoBtn.addEventListener("click", changeTitle)


function changeTitle(e) {
    cardTitle.textContent = text;

    e.preventDefault();
}
function setTitle(e) {
    text += e.key;
}






