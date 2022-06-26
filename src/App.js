import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  //apply the starting state and deconstruct the data and function to set the new data when needed
  const [recipes, setRecipes] = useState(RecipeData);

  //deletes any recipe that is chosen with the delete button
  const handleDelete = (indexToDelete) => {
    setRecipes(recipes.filter((_recipe, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <div className="recipe-list">
        <table className="tab">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Use RecipeList component by passing recipes and the delete handler defined in this component as prop */}
            <RecipeList recipes={recipes} handleDelete={handleDelete} />
          </tbody>
        </table>
        {/* Tables are strict with what its children, so last row is set outside the recipe table */
        /* To add recipes, pass in the current list and the function to add to the array to the component */}
        <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
      </div>
    </div>
  );
}

export default App;
