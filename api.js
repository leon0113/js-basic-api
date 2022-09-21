function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(respose => respose.json())
        .then(json => console.log(json))
}
// call from another function
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse => reponse.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}


function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then(postData => console.log(postData))
}

