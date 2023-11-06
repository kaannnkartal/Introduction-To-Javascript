// Asenkron problemi

// http istekleri


// const users = [
//     {
//         id: 5,
//         post : "Enes Post 1"
//     },
//     {
//         id: 5,
//         post: "Enes Post 2"
//     },
//     {
//         id: 5,
//         post: "Enes Post 3"
//     },
//     {
//         id: 8,
//         post: "Kaan Post 1"
//     },

// ]

// // setTimeout(() => {  // ! Simdilik sunucu isteğinin geri cevabının donmesini simule etmek icin 2 sn delay uyguladık sanki serverdan cevabın gelmesini bekliyoruz.
    
// // }, 2000);


// function getUserId() {
//     setTimeout(() => {
//        // Servise gittik ve cevabı aldık.
//         return 5; 
//     }, 1000);
// }

// function getPostByUserId(userId) {
//     // Gercek bir rest api isteği atacağız.
//     console.log(userId);
//     setTimeout(() => {
//         users.forEach(user => {
//             if (user.id === userId) {
//                 console.log(user.post);
//             }
//         })
//     }, 500);
// }

// let userId = getUserId();

// getPostByUserId(userId);


// ! YUKARIDAKİ KOD CIKTI ÜRETMEZ CALISMAZ:
// ! NEDEN ???

// ! Cünkü hem getUserId fonksiyonu asenkron calısıyor, hem de getPostByUserId
// ! Yani demek oluyor ki bu 2 metot aynı anda calısmaya basladı.
// ! Peki sonrasında ne oldu?= getPostByUserId metodu 500 ms'lik bir delay ile calısmasını bitirirken,
// ! getUserId fonksiyonu 1000ms'lik bir gecikme ile calısmasını bitirdi.

// ! Yani getPostByUserId fonksiyonu daha once bitti, getUserId daha sonra bitti
// ! Bundan dolayı userId'yi atayamadık ! Undefined kaldı!!!!!!


// ? Bu sorunu cozmek icin sonraki projede senkrona cevircez.
// ? callback - promise - async await.



// * Bu sorunun callback ile cozumu :


const users = [
    {
        id: 5,
        post: "Enes Post 1"
    },
    {
        id: 5,
        post: "Enes Post 2"
    },
    {
        id: 5,
        post: "Enes Post 3"
    },
    {
        id: 8,
        post: "Kaan Post 1"
    },

]

// setTimeout(() => {  // ! Simdilik sunucu isteğinin geri cevabının donmesini simule etmek icin 2 sn delay uyguladık sanki serverdan cevabın gelmesini bekliyoruz.

// }, 2000);


function getUserId(callback) {
    setTimeout(() => { 
        // Servise gittik ve cevabı aldık.
        let userId = 5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId) {
    // Gercek bir rest api isteği atacağız.
    console.log(userId);
    setTimeout(() => {
        users.forEach(user => {
            if (user.id === userId) {
                console.log(user.post);
            }
        })
    }, 500);
}


getUserId(getPostByUserId);

