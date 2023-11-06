// input eventları


// focus bir inputa girdiğimizde tetiklenir.
// blur inputun icinden cıktıgımızda blur tetiklenir.
// copy inputun icindeki bir değeri kopyalanırsa tetiklenir.
// paste inputun icine yapıstırıldıgında tetiklenir.
// cut inputun icindeki değeri cut yaptığımızda tetiklenir.
// select mouse ile secmeye basladıgım mousetan elimizi cektik. Tetiklenir.


inpArea = document.querySelector("#todoName");

console.log(inpArea);

// inpArea.addEventListener("focus", run);
// inpArea.addEventListener("blur", run);

inpArea.addEventListener("copy", run);
inpArea.addEventListener("paste", run);
inpArea.addEventListener("cut", run);
inpArea.addEventListener("select", run);


function run(e) {
    console.log(e.type);
}


