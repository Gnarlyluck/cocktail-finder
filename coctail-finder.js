const API_KEY = "1"
const COCKTAIL_URL = `https://www.thecocktaildb.com/api/json/v1/${API_KEY}/search.php?s=margarita`

const getCocktail = async () => {
    try{
    const response = await axios.get(COCKTAIL_URL)
    console.log(response.data)
    }catch(error){
    console.log(error)
    // alert('uh oh server fetch error')
    }
}