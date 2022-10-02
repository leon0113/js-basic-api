const loadcountires = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadcountires();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of countries) {
    //     console.log(country);
    // }
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = `The capital of ${country.name.common} is : ${country.capital} and the country share borders with ${country.borders} `
        div.appendChild(p);
        countriesDiv.appendChild(div);
    })
}