// Dinamik olarak element olusturmak

// ? createElement metodu kullanılır. Parametre olarak element ismi alır.


const link = document.createElement("a");

link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "http://google.com";
link.target = "_blank";
link.innerHTML = "Kişisel Websiteme Git";


// console.log(link);


// ! Siteye olusturgumuz elementi eklemek icin parent bulunur ve sana cocuk ekleyeceğim denir.
// ! Simdi parent element olan card body'i sececeğiz
const cardBody = document.querySelectorAll(".card-body")[1];
// console.log(cardBody);

//! Parent secildikten sonra appendChild methodu kullanıyoruz. "Append" : sonuna ekler.
cardBody.appendChild(link);



// * Bir ornek daha yapalım...
// * Todo 5 eklemeye calısacağız.


{/* <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li> */}

// ! Yukarıdaki kodu kopya cekmek icin kullanacağız
// ! Yani olusturacağım elementin classlarını ve ozelliklerini verirken buradan bakıcam.


const todoListItem = document.createElement("li");
const todoLink = document.createElement("a");
const todoI = document.createElement("i");


todoListItem.className = "list-group-item d-flex justify-content-between";
todoListItem.textContent = "Todo 5";

todoLink.className = "delete-item";
todoLink.href = "#";

todoI.className = "fa fa-remove";

// ! Elementleri olusturduk simdi birbiri icine ekleyeceğiz.

todoLink.appendChild(todoI);
todoListItem.appendChild(todoLink);


//* Bu list itemı ekleyeceğimiz listeyi bulmamız gerekiyor.


value = document.querySelector(".list-group");

console.log(value);

//* Listemizi bulduk 1 tane liste oldugu icin ilk listeyi aldık direkt.


value.appendChild(todoListItem);










