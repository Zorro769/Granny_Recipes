export async function fetchRecipes(filter) {
  console.log(filter);
  const { query = "", limit, type, diet, maxReadyTime, cuisine } = filter;

  // const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${query}&number=${limit}`;

  let url = `${process.env.REACT_APP_SERVER_URL}/spoonacular/recipes/?query=${query}&limit=${limit}`;

  if (type) url += `&type=${type}`;
  if (diet) url += `&diet=${diet}`;
  if (cuisine) url += `&cuisine=${cuisine}`;
  if (maxReadyTime) url += `&maxReadyTime=${maxReadyTime}`;
  const response = await fetch(url);

  const data = await response.json();

  return data;
}
export async function fetchRandomRecipes(filter) {
  const { limit } = filter;

  // const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=${limit}`;
  const url = `${process.env.REACT_APP_SERVER_URL}/spoonacular/recipes/random?limit=30`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}
export async function fetchRecommendRecipes(filter) {
  const { id } = filter;

  const url = `${process.env.REACT_APP_SERVER_URL}/spoonacular/recipes/recommended/${id}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
}
export async function fetchRecipe(id) {
  // const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false?&apiKey=${process.env.REACT_APP_API}`

  const url = `${process.env.REACT_APP_SERVER_URL}/spoonacular/recipes/${id}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}
