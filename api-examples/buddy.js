const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = data => {
    const buddieS = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddieS) {
        console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} and Email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}

