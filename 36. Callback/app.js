// Callback nedir?
// timing - event - http


// Callback : bir fonksiyonu bir fonksiyona parametre gecerek
// asenkron yapıyı senkron yapıya cevirir.


function getName(callback) {

    setTimeout(() => {
        let name = "Kaan";
        callback(name);
    }, 1000);
    
}

function getSurname(name) {
    setTimeout(() => {
        console.log(name + " Kartal");
    }, 500);
    
}

getName(getSurname) 



// getName();
// getSurname();