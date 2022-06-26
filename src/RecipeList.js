import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleDelete }) {
  //use the Recipe component to create the list using map to add key to each recipe
  return (
    <>
      {recipes.map((recipe, index) => (
        <Recipe
          recipe={recipe}
          key={index}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </>
  );
}

export default RecipeList;
