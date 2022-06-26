import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialData });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //prevent page from refreshing when clicking on the create button
  //add the new recipe to the array of recipes and clear the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({ ...initialData });
  };

  //return the form that will put the information into the formData object
  //require user to input all information to avoid breaking the site
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tfoot>
          <tr className="footer">
            <td>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                required={true}
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required={true}
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                id="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                required={true}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                required={true}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                required={true}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default RecipeCreate;
