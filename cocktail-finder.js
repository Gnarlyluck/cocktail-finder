const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`


const log = document.getElementById('cocktail-results')
function updateValue(e){
    log.textContent = e.target.value
}
//receive user cocktail text in input bar!!!!
//take user input and insert it onto the end of API URL using string interpolation!!!
//once inserted initialize or 'fire' the click button to return results!!!
//user should also be able to hit enter for results
//after accessing your selected drink go into the 
//drink name
//instructions
//glass type
//ingredient 1, 2, 3, 4 etc
//measure e, 2, 3, 4, etc
//if there is no value stop running
//results should be appended to a <p> tag or <div> etc .
const getCocktail = async () => {
   let userInput = document.getElementById("cocktailInput").value;
                 
   const COCKTAIL_URL = `${BASE_URL}${userInput}`
    try{
    const response = await axios.get(COCKTAIL_URL)
    console.log(response)
    }catch(error){
    console.log(error)
    }
}




document.querySelector('input').addEventListener('input', updateValue)
document.querySelector('.cocktailbtn').addEventListener('click', getCocktail)