// ! ASYNC AWAIT

// PROMISE THEN ZINCIRI




 async function hello() {
    return "Hello World"
}

// ! Bir function async isaretlenirse bu promise doner.
// console.log(hello());

// hello()
//     .then(response => console.log(response));



// ? Promiselerle yapımı :


function getComments(url) {
    
    fetch(url)
        .then(response => response.json())
        .then(data => data.id)
        .then(dataId => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.log(err)); 
        })
        
}


// ? ASYNC AWAIT ILE YAPILISI:
// ! Bir yerde await kullanılıyorsa kullanmıs olduğun fonksiyonun basına ASYNC koymalısın.
async function getComments2(url) {
    const responsePost = await fetch(url);
    const post = await responsePost.json();

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComments.json();
    console.log(comments);
}



getComments2("https://jsonplaceholder.typicode.com/posts/1")