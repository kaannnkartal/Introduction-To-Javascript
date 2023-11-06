// ? Promise.

// let check = true;

// const promise = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("Promise başarılı")
//     }
//     else {
//         reject("Promise başarısız...")
//     }
// })


// console.log(promise);


// let check = true;
// function createPromise() {
    

//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promisete herhangi bi sıkıntı yok");
//         }
//         else {
//             reject("Sıkıntı büyük");
//         }
//     })

// }

// createPromise()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
// })


// function readStudents(url) {
    
//     return new Promise((resolve, reject) => {
        
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 resolve(JSON.parse(xhr.responseText));
//             }
//             else {
//                 reject("başarısız");
//             }
//         })

//         xhr.open("GET", url);
//         xhr.send();
//     })
// }


// readStudents("students.json")
// .then((data) => {
//     console.log(data)
// })


// const prom1 = new Promise(resolve => setTimeout(resolve,1000,"Tayfun Erbilen"))
// const prom2 = new Promise(resolve => setTimeout(resolve, 800, "Prototürk.com"))
// const prom3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Tayfun.net"))

// Promise.all([prom1, prom2, prom3])
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

const promise1 = new Promise((resolve, reject) => {
    
    resolve("İşlem Başarılı");

    reject("İşlem başarısız");


})
    .then(data => {
        console.log(data);
        return data +=data;
    }).then(data => {
        console.log(data);
})




