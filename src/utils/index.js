import { flushSync } from "react-dom";


export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&number=${limit}&query=${query}`;
    
    const response = await fetch(url);

    const data = await response.json();
    console.log(data?.results);
    
    return data?.results;
}
//https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_EDAMAM_API_KEY}`
export async function fetchRecipe(id){

const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false?&apiKey=${process.env.REACT_APP_API}`

const response = await fetch(url)

const data = await response.json();

return data;
}