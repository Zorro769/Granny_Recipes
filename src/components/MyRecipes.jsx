import React from "react";
import { useEffect, useState } from "react";
import { fetchRecipe } from "../utils";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import RecipeCard from "./RecipeCard";
import Header from "../components/Header";
import Loading from "./Loading";

const MyRecipes = ({ onClose }) => {
  const axiosPrivate = useAxiosPrivate();
  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavourites = async () => {
    try {
      const data = await axiosPrivate.get("/recipes");
      const fetchedMyRecipes = data.data;
      setMyRecipes(fetchedMyRecipes);
      setLoading(false);
      //   const recipesData = await Promise.all(
      //     fetchedFavourites.map(async (recipe) => {
      //       const recipeData = await fetchRecipe(recipe.recipe);
      //       return {...recipeData };
      //     })
      //   );
      //   setRecipes(recipesData);
      //   console.log(myRecipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchFavourites();
    // console.log(myRecipes);
  }, []);
  return (
    <div className="w-full">
      <Header label={"My Recipes"} />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-grow overflow-y-auto p-20">
          {myRecipes?.length > 0 ? (
            <>
              <div className="w-full  flex flex-wrap justify-center gap-10 px-0 lg:px-10 py-10">
                {myRecipes?.map((item, index) => (
                  <RecipeCard
                    recipe={item}
                    key={index}
                    favouriteFlag={false}
                    onClose={onClose}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-white w-full items-center justify-center py-10">
              <p className="text-center">No Recipe Found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
