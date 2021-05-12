import React from "react";

const TarjetaIngredients = ({ ingredientsOption }) => {
  return (
    <>
      {ingredientsOption.map((ingredient) => (        
          <option value={ingredient["@id"]}>{ingredient.name}</option>        
      ))}
    </>
  );
};

export default TarjetaIngredients;
