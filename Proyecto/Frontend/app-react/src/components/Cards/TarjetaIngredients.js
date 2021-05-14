import React from "react";
import Select from "react-select";

/*const TarjetaIngredients = ({ ingredientsOption }) => {
  let ingredientObj = ingredientsOption.map((ingredient) => {
    return { value: ingredient["@id"], label: ingredient.name };
  });*/

  const TarjetaIngredients = ({ ingredientsOption }) => {
  return (
    <>
       {ingredientsOption.map((ingredient) => (        
          <option value={ingredient["@id"]}>{ingredient.name}</option>

     ))}
      {/*<Select
        isMulti
        name="colors"
        options={ingredientObj}
        className="basic-multi-select"
        classNamePrefix="select"
      }
    />*/}
    </>
  );
};

export default TarjetaIngredients;
