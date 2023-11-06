/*

DOMContentLoaded : Sayfa yüklendiğinde cagrılacak event
load
click
dblclick
mouseover / mouseout
moussenter / mouseleave


*/

// ! Mouseover : Hem card body hem de card body icerisindeki elementlerin icerisinde gezindiğimizde tetiklenirken,
// ! Mouseenter : Sadece verilmiş hedefteki html elementi üzerinde calısır, o html etiketinin icindeki diğer elementler üzerinde gezinirken tetiklenmez.




// ?Buton secmeden direkt sayfa yüklendiğinde calısır.
// document.addEventListener("DOMContentLoaded", run);

// window.addEventListener("load", run);

// function run() {
//     console.log("Sayfa Yüklendi")
// }

const cardTitle = document.querySelectorAll(".card-title")[1];

cardTitle.addEventListener("click", run);



function run(e) {
    console.log(e.type);
}



const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover", run);

cardBody.addEventListener("mouseenter", run);


