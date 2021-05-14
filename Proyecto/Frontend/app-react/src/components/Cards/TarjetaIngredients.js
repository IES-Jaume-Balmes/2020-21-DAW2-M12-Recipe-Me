import React, {useState} from "react";
import Select from "react-select";


const TarjetaIngredients = ({ ingredientsOption }) => {
  const[ingredient,setIngredients] = useState([]);
  let ingredientObj = ingredientsOption.map((ingredient) => {
    
    return { value: ingredient["@id"], label: ingredient.name };
  });

  //const TarjetaIngredients = ({ ingredientsOption }) => {
  return (
    <>
       {/*ingredientsOption.map((ingredient, i) => (        
          <option key={i} value={ingredient.name}>{ingredient.name}</option>

       ))*/}
      {<Select
        onChange={setIngredients}
        isMulti
        name="colors"
        options={ingredientObj}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Buscar Ingrediente..."
    />}
    </>
  );
};

export default TarjetaIngredients;
