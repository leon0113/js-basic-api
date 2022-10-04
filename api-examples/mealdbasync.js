const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    if (searchText == '') {

    }
    else {
        // load data
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }

}


const displaySearchResult = meals => {
    console.log(meals.length)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const noPhone = document.getElementById('no-phone');
    if (meals.length == 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}....[click for more]</p>
            </div>
        </div>

        `;
        searchResult.appendChild(div);
    })
}
//! asyncronous
const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals[0]));
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])
}

const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go To Youtube</a>
    </div>
    `;
    mealDetails.appendChild(div);
}

