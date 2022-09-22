function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(respose => respose.json())
        .then(json => console.log(json))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then(postData => console.log(postData))
}

//! call from another function
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse => reponse.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `User Name : ${user.name} >>>>> Email : ${user.email}`;
        ul.appendChild(li);
    }
}


function loadAddress() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse => reponse.json())
        .then(data => displayUser(data))
}
function displayUser(data) {
    const ul = document.getElementById('userAddress');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `User location : ${user.address.city}`;
        ul.appendChild(li);
    }
}



