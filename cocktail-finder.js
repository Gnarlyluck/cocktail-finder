const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

let drinkLog = document.getElementById('cocktail-results')
function updateValue(e){
    drinkLog/*.textContent*/ = e.target.value
}
const getCocktail = (event) => {
    event.preventDefault()
   let userInput = document.getElementById("cocktailInput").value;             
   
    displayCocktail(userInput)
}

let cocktailIngredients = document.querySelector('.ingredients')

const displayCocktail = async (userInput) => {
    try{
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
        let drink = response.data.drinks[0]
        console.log(drink)
        let drinkName = drink.strDrink
        console.log(drinkName)
        let glass = drink.strGlass
        console.log(glass)
        let image = drink.strDrinkThumb
        console.log(image)
        let instructions = drink.strInstructions
        console.log(instructions)
        let showDrink = document.querySelector('#showDrink')
        showDrink.innerHTML = 
        `<div class = 'showCocktail'> 
        <p id='cocktailName'> ${drinkName}</p>
        <img src=${image} id='cocktailImage'/>`
        cocktailIngredients.innerHTML=`
        <h3> Ingredients </h3>
        <span id='measurement1'>${drink.strMeasure1 }</span>
        <span id='ingredient1'>${drink.strIngredient1 }</span>`
        if(drink.strIngredient2 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement2'>${drink.strMeasure2 }</span>
        <span id='ingredient2'>${drink.strIngredient2 }</span>`
        }
        if(drink.strIngredient3 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement3'>${drink.strMeasure3 }</span>
        <span id='ingredient3'>${drink.strIngredient3 }</span>`
        }
        if(drink.strIngredient4 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement4'>${drink.strMeasure4 }</span>
        <span id='ingredient4'>${drink.strIngredient4 }</span>`
        }
        if(drink.strIngredient5 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement5'>${drink.strMeasure5 }</span>
        <span id='ingredient5'>${drink.strIngredient5 }</span>`
        }
        if(drink.strIngredient6 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement6'>${drink.strMeasure6 }</span>
        <span id='ingredient6'>${drink.strIngredient6 }</span>`
        }
        if(drink.strIngredient7 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement7'>${drink.strMeasure7 }</span>
        <span id='ingredient7'>${drink.strIngredient7 }</span>`
        }
        if(drink.strIngredient7 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement7'>${drink.strMeasure7 }</span>
        <span id='ingredient7'>${drink.strIngredient7 }</span>`
        }
        if(drink.strIngredient8 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement8'>${drink.strMeasure8 }</span>
        <span id='ingredient8'>${drink.strIngredient8 }</span>`
        }
        if(drink.strIngredient8 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement8'>${drink.strMeasure9 }</span>
        <span id='ingredient8'>${drink.strIngredient9 }</span>`
        }
        if(drink.strIngredient9 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement9'>${drink.strMeasure10 }</span>
        <span id='ingredient9'>${drink.strIngredient10 }</span>`
        }
        if(drink.strIngredient9 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement9'>${drink.strMeasure11 }</span>
        <span id='ingredient9'>${drink.strIngredient11 }</span>`
        }
        if(drink.strIngredient10 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement10'>${drink.strMeasure12 }</span>
        <span id='ingredient10'>${drink.strIngredient12 }</span>`
        }
        if(drink.strIngredient11 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement11'>${drink.strMeasure13 }</span>
        <span id='ingredient11'>${drink.strIngredient13 }</span>`
        }
        if(drink.strIngredient12 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement12'>${drink.strMeasure14 }</span>
        <span id='ingredient12'>${drink.strIngredient14 }</span>`
        }
        if(drink.strIngredient13 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement13'>${drink.strMeasure15 }</span>
        <span id='ingredient13'>${drink.strIngredient15 }</span>`
        }  
        showDrink.innerHTML += `<h4>glass </h4><p id='glassType'>${glass}</p>`
        showDrink.innerHTML += `<h4>Instructions </h4><p id='preparation'>${instructions}</p>`
    }catch(error){
        console.log(error)
    }

}
document.querySelector('input').addEventListener('input', updateValue)
document.querySelector('.cocktailbtn').addEventListener('click', getCocktail)