// AJAX nedir :


function prepareURL(url,id) {
    if (id === null) {
        return url;
    }
    else {
        return `${url}?postId=${id}`;
    }
}

function getCommnets(url, id) {
    
    const xhr = new XMLHttpRequest;

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            
            console.log(xhr.responseText);
        }
    })
    
    xhr.open("GET", prepareURL(url, id));
    xhr.send();
}


// getCommnets("https://jsonplaceholder.typicode.com/comments", 1);




// Kaan sen yap! GETDATA yapacaksın.


function getData(url) {
    
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    })

    xhr.open("GET", url)
    xhr.send();
}



getData("https://jsonplaceholder.typicode.com/posts");


