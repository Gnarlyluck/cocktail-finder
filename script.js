const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/`
const search = `search.php?s=`
const random = `random.php`
let cocktailIngredients = document.querySelector('.ingredients')
let drinkLog = document.getElementById('cocktail-results')
let showDrink = document.querySelector('#showDrink')

function updateValue(e){
    drinkLog = e.target.value
}
const getCocktail = (event) => {
    event.preventDefault()
    let userInput = document.getElementById("cocktailInput").value             
    displayCocktail(userInput)
}

const randomCocktail = async () => {
    try{    const response = await axios.get(`${BASE_URL}${random}`)
        let drink = response.data.drinks[0]
        let drinkName = drink.strDrink
        let glass = drink.strGlass
        let image = drink.strDrinkThumb
        let instructions = drink.strInstructions
            showDrink.innerHTML = 
                `<div class = 'showCocktail'> 
                <p id='cocktailName'> ${drinkName}</p>
                <img src=${image} id='cocktailImage'/>`
            cocktailIngredients.innerHTML=
                `<h3 class='subject'> Ingredients </h3>
                <span class='measurement'>${drink.strMeasure1 } of </span>
                <span class='ingredient'>${drink.strIngredient1 },  </span>`
            if(drink.strIngredient2 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${ drink.strMeasure2 } of </span>
                <span class='ingredient'>${ drink.strIngredient2 }, </span>`
            }if(drink.strIngredient3 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${drink.strMeasure3 } of </span>
                <span class='ingredient'>${drink.strIngredient3 }, </span>`
            }
            if(drink.strIngredient4 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${drink.strMeasure4 } of </span>
                <span class='ingredient'>${drink.strIngredient4 }, </span>`
            }
            if(drink.strIngredient5 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${drink.strMeasure5 } of </span>
                <span class='ingredient'>${drink.strIngredient5 }, </span>`
            }
            if(drink.strIngredient6 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${drink.strMeasure6 } of </span>
                <span class='ingredient'>${drink.strIngredient6 }, </span>`
            }
            if(drink.strIngredient7 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${drink.strMeasure7 } of </span>
                <span class='ingredient'>${drink.strIngredient7 }, </span>`
            }
            if(drink.strIngredient8 != null){
                cocktailIngredients.innerHTML +=
                `<span class'measurement'>${drink.strMeasure8 } of </span>
                <span class'ingredient'>${drink.strIngredient8 }, </span>`
            }
            if(drink.strIngredient9 != null){
                cocktailIngredients.innerHTML +=
                `<span class'measurement'>${drink.strMeasure9 } of </span>
                <span class'ingredient'>${drink.strIngredient9 }, </span>`
            }
            if(drink.strIngredient10 != null){
                cocktailIngredients.innerHTML +=
                `<span class='measurement'>${drink.strMeasure10 } of </span>
                <span class='ingredient'>${drink.strIngredient10 }, </span>`
            }
            showDrink.innerHTML += `<h4 class='subject'>Glass </h4><p id='glassType'>${glass}</p>`
            showDrink.innerHTML += `<h4 class='subject'>Instructions </h4><p id='preparation'>${instructions}</p>`
        }catch(error){
            alert('that drink is not in our database')
            console.log('random button not wokring')
        }
}

const displayCocktail = async (userInput) => {
    try{
        const response = await axios.get(`${BASE_URL}${search}${userInput}`)
        let drink = response.data.drinks[0]
        let drinkName = drink.strDrink
        let glass = drink.strGlass
        let image = drink.strDrinkThumb
        let instructions = drink.strInstructions
        showDrink.innerHTML = 
            `<div class = 'showCocktail'> 
            <p id='cocktailName'> ${drinkName}</p>
            <img src=${image} id='cocktailImage'/>`
        cocktailIngredients.innerHTML=`
            <h3 class='subject'> Ingredients </h3>
            <span class='measurement'>${drink.strMeasure1 } of </span>
            <span class='ingredient'>${drink.strIngredient1 },  </span>`
        if(drink.strIngredient2 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${ drink.strMeasure2 } of </span>
            <span class='ingredient'>${ drink.strIngredient2 }, </span>`
        }
        if(drink.strIngredient3 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure3 } of </span>
            <span class='ingredient'>${drink.strIngredient3 }, </span>`
        }
        if(drink.strIngredient4 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure4 } of </span>
            <span class='ingredient'>${drink.strIngredient4 }, </span>`
        }
        if(drink.strIngredient5 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure5 } of </span>
             <span class='ingredient'>${drink.strIngredient5 }, </span>`
        }
        if(drink.strIngredient6 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure6 } of </span>
            <span class='ingredient'>${drink.strIngredient6 }, </span>`
        }
        if(drink.strIngredient7 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure7 } of </span>
            <span class='ingredient'>${drink.strIngredient7 }, </span>`
        }
        if(drink.strIngredient8 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure8 } of </span>
            <span class='ingredient'>${drink.strIngredient8 }, </span>`
        }
        if(drink.strIngredient9 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure9 } of </span>
            <span class='ingredient'>${drink.strIngredient9 }, </span>`
        }
        if(drink.strIngredient10 != null){
            cocktailIngredients.innerHTML +=
            `<span class='measurement'>${drink.strMeasure10 } of </span>
            <span class='ingredient'>${drink.strIngredient10 }, </span>`
        }
        showDrink.innerHTML += `<h4 class='subject'>Glass </h4><p id='glassType'>${glass}</p>`
        showDrink.innerHTML += `<h4 class='subject'>Instructions </h4><p id='preparation'>${instructions}</p>`
    }catch(error){
        alert('That drink is not in our database')
        console.log('create cocktail not currently wokring')
    }
}

document.querySelector('input').addEventListener('input', updateValue)
document.querySelector('.cocktailbtn').addEventListener('click', getCocktail)
document.querySelector('.randomCocktail').addEventListener('click', randomCocktail)   
document.querySelector('#cocktailInput').addEventListener('click', alert('please click "your drink is waiting" to search for cocktails'))