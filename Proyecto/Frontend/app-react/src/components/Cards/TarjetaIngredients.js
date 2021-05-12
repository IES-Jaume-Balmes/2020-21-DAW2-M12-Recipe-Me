import React from "react";

const TarjetaIngredients = ({ ingredientsOption }) => {
  return (
    <>
      {ingredientsOption.map((ingredient) => (        
          <option id={ingredient["@id"]}>{ingredient.name}</option>        
      ))}
    </>
  );
};

export default TarjetaIngredients;
