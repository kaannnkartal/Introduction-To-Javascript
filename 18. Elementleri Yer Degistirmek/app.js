// Elementleri Değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

// console.log(cardBody);

const cardBodyHeader = cardBody.children[0];
// const newElement = document.createTextNode("Yeni Todo Listesi");



const newElement = document.createElement("h2");
newElement.className = "card-title";
newElement.textContent = "Yeni Todo!";


cardBody.replaceChild(newElement, cardBodyHeader);

