import React from "react";

    
    const TarjetaIngredients = ({ ingredients }) => {
      return (
        <div>
          {ingredients.map((ingredient) => (
            
              <div class="card-body">
                <h5 class="card-title">{ingredient.name}</h5>    
                </div>
          ))}
        </div>
      )
    };
    
    export default TarjetaIngredients