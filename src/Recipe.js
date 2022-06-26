// Recipe formats individual recipes

import React from "react";

// Imported parse to handle the replaced string that contains HTML to avoid using dangerouslySetInnerHTML
import parse from "html-react-parser";

export default function Recipe({ recipe, handleDelete }) {
  //format the preparation list to be more readable by adding line breaks before the numbers in the list
  const formatPrep = (preparation) => {
    let pattern = /([2-9]\.)/g;
    return preparation.replace(pattern, "<br />$1");
  };

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        {/* parse function from "html-react-parser" */}
        <p>{parse(formatPrep(recipe.preparation))}</p>
      </td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
