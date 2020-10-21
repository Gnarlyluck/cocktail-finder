const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/`
const search = `search.php?s=`
const random = `random.php`
let cocktailIngredients = document.querySelector('.ingredients')
let drinkLog = document.getElementById('cocktail-results')
let showDrink = document.querySelector('#showDrink')
function updateValue(e){
    drinkLog/*.textContent*/ = e.target.value
}
const getCocktail = (event) => {
    event.preventDefault()
   let userInput = document.getElementById("cocktailInput").value             
   
    displayCocktail(userInput)
}


const randomCocktail = async () => {
    try{    const response = await axios.get(`${BASE_URL}${random}`)
    //console.log(response)
    let drink = response.data.drinks[0]
        //console.log(drink)
        let drinkName = drink.strDrink
       // console.log(drinkName)
        let glass = drink.strGlass
        //console.log(glass)
        let image = drink.strDrinkThumb
       //console.log(image)
        let instructions = drink.strInstructions
        //console.log(instructions)
        // showDrink = ''
        let ingredient = [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
        ]
        for(let i = 0; i < ingredient.length; i++){
            if(ingredient[i] !== null){
                //console.log(ingredient[i])
            }
            let measure = [
                drink.strMeasure1,
                drink.strMeasure2,
                drink.strMeasure3,
                drink.strMeasure4,
                drink.strMeasure5,
                drink.strMeasure6,
                drink.strMeasure7,
                drink.strMeasure8,
                drink.strMeasure9,
                drink.strMeasure10,
                drink.strMeasure11,
                drink.strMeasure12,
                drink.strMeasure13,
                drink.strMeasure14,
            ]
            for(let i = 0; i < measure.length; i++){
                if(measure[i] !== null){
                    // console.log(measure[i])
                }
            }
            showDrink.innerHTML = 
            `<div class = 'showCocktail'> 
            <p id='cocktailName'> ${drinkName}</p>
            <img src=${image} id='cocktailImage'/>`
            cocktailIngredients.innerHTML=
            `<h3 class='subject'> Ingredients </h3>
            <span id='measurement1'>${drink.strMeasure1 } of </span>
            <span id='ingredient1'>${drink.strIngredient1 },  </span>`
            if(drink.strIngredient2 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement2'>${ drink.strMeasure2 } of </span>
            <span id='ingredient2'>${ drink.strIngredient2 }, </span>`
            }if(drink.strIngredient3 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement3'>${drink.strMeasure3 } of </span>
            <span id='ingredient3'>${drink.strIngredient3 }, </span>`
            }
            if(drink.strIngredient4 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement4'>${drink.strMeasure4 } of </span>
            <span id='ingredient4'>${drink.strIngredient4 }, </span>`
            }
            if(drink.strIngredient5 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement5'>${drink.strMeasure5 } of </span>
            <span id='ingredient5'>${drink.strIngredient5 }, </span>`
            }
            if(drink.strIngredient6 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement6'>${drink.strMeasure6 } of </span>
            <span id='ingredient6'>${drink.strIngredient6 }, </span>`
            }
            if(drink.strIngredient7 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement7'>${drink.strMeasure7 } of </span>
            <span id='ingredient7'>${drink.strIngredient7 }, </span>`
            }
            if(drink.strIngredient8 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement8'>${drink.strMeasure8 } of </span>
            <span id='ingredient8'>${drink.strIngredient8 }, </span>`
            }
            if(drink.strIngredient9 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement9'>${drink.strMeasure9 } of </span>
            <span id='ingredient9'>${drink.strIngredient9 }, </span>`
            }
            if(drink.strIngredient10 != null){
                cocktailIngredients.innerHTML +=
                `<span id='measurement10'>${drink.strMeasure10 } of </span>
            <span id='ingredient10'>${drink.strIngredient10 }, </span>`
            }
            // showDrink.innerHTML =`<h3> ${ingredient}<h3>`

            showDrink.innerHTML += `<h4 class='subject'>Glass </h4><p id='glassType'>${glass}</p>`
            showDrink.innerHTML += `<h4 class='subject'>Instructions </h4><p id='preparation'>${instructions}</p>`
        }
        
        }catch(error){
            console.log('random button not wokring')
        }
}

const displayCocktail = async (userInput) => {
    try{
        const response = await axios.get(`${BASE_URL}${search}${userInput}`)
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
        
        showDrink.innerHTML = 
        `<div class = 'showCocktail'> 
        <p id='cocktailName'> ${drinkName}</p>
        <img src=${image} id='cocktailImage'/>`
        cocktailIngredients.innerHTML=`
        <h3 class='subject'> Ingredients </h3>
        <span id='measurement1'>${drink.strMeasure1 } of </span>
        <span id='ingredient1'>${drink.strIngredient1 },  </span>`
        if(drink.strIngredient2 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement2'>${ drink.strMeasure2 } of </span>
        <span id='ingredient2'>${ drink.strIngredient2 }, </span>`
        }
        if(drink.strIngredient3 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement3'>${drink.strMeasure3 } of </span>
        <span id='ingredient3'>${drink.strIngredient3 }, </span>`
        }
        if(drink.strIngredient4 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement4'>${drink.strMeasure4 } of </span>
        <span id='ingredient4'>${drink.strIngredient4 }, </span>`
        }
        if(drink.strIngredient5 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement5'>${drink.strMeasure5 } of </span>
        <span id='ingredient5'>${drink.strIngredient5 }, </span>`
        }
        if(drink.strIngredient6 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement6'>${drink.strMeasure6 } of </span>
        <span id='ingredient6'>${drink.strIngredient6 }, </span>`
        }
        if(drink.strIngredient7 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement7'>${drink.strMeasure7 } of </span>
        <span id='ingredient7'>${drink.strIngredient7 }, </span>`
        }
        if(drink.strIngredient8 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement8'>${drink.strMeasure8 } of </span>
        <span id='ingredient8'>${drink.strIngredient8 }, </span>`
        }
        if(drink.strIngredient9 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement9'>${drink.strMeasure9 } of </span>
        <span id='ingredient9'>${drink.strIngredient9 }, </span>`
        }
        if(drink.strIngredient10 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement10'>${drink.strMeasure10 } of </span>
        <span id='ingredient10'>${drink.strIngredient10 }, </span>`
        }
        if(drink.strIngredient11 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement11'>${drink.strMeasure11 } of </span>
        <span id='ingredient11'>${drink.strIngredient11 }, </span>`
        }
        if(drink.strIngredient10 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement10'>${drink.strMeasure12 } of </span>
        <span id='ingredient10'>${drink.strIngredient12 }, </span>`
        }
        if(drink.strIngredient11 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement11'>${drink.strMeasure13 } of </span>
        <span id='ingredient11'>${drink.strIngredient13 }, </span>`
        }
        if(drink.strIngredient12 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement12'>${drink.strMeasure14 } of </span>
        <span id='ingredient12'>${drink.strIngredient14 }, </span>`
        }
        if(drink.strIngredient13 != null){
            cocktailIngredients.innerHTML +=
            `<span id='measurement13'>${drink.strMeasure15 } of </span>
        <span id='ingredient13'>${drink.strIngredient15 }, </span>`
        }  
        showDrink.innerHTML += `<h4 class='subject'>Glass </h4><p id='glassType'>${glass}</p>`
        showDrink.innerHTML += `<h4 class='subject'>Instructions </h4><p id='preparation'>${instructions}</p>`
    }catch(error){
        console.log('create cocktail not currently wokring')
    }

}
//look up a random drink name
//see if you can return the drink AND ingredients

document.querySelector('input').addEventListener('input', updateValue)
document.querySelector('.cocktailbtn').addEventListener('click', getCocktail)
document.querySelector('.randomCocktail').addEventListener('click', randomCocktail)    
    

