import React from "react";

const TarjetaIngredients = ({ ingredientsOption }) => {
  return (
    <select multiple name="ingredients" onChange={this.handleChange}>
      {ingredientsOption.map((ingredient) => (
        
          <option id={ingredient["@id"]}>{ingredient.name}</option>
        
      ))}
    </select>
  );
};

export default TarjetaIngredients;
