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
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
      <h3>${country.name.common}</h3>
      <p>The Capital city is:${country.capital}</p>
      <button onclick="loadCountryDetails('${country.name.common}')">Details</button>
      `;

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = `The capital of ${country.name.common} is : ${country.capital} and the country share borders with ${country.borders} `
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
}

const loadCountryDetails = name1 => {
    const url = `https://restcountries.com/v3.1/name/${name1}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}


const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = ` 
    <h3> Country details</h3>
        The population of ${country.name.common} is : ${country.population} <br>
    <img src="${country.flags.png}">
        `;
}