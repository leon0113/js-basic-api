function addAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbum(data))
}

function displayAlbum(albums) {
    const ui = document.getElementById('album');
    for (const album of albums) {
        const li = document.createElement('p');
        li.classList.add('album')
        li.innerText = `Album title is : ${album.title} `
        ui.appendChild(li);
    }
}