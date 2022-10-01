//!--------------------------------
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}
//!--------------------------------
function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(dat => displayUsers(dat))
}

function displayUsers(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        // console.log(user.name)
        const li = document.createElement('li');
        li.innerText = `User name is : ${user.name}`;
        ul.appendChild(li);
    }
}

//!---------------------------------
function loadPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}

