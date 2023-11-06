
// fetch("students.json");


// function getStudents(url) {
//     const promise = fetch(url);
//     promise.then(data => (data.json()))
//         .then(data => console.log(data));
// }


// getStudents("students.json");


function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        })
}

getData("https://jsonplaceholder.typicode.com/posts")