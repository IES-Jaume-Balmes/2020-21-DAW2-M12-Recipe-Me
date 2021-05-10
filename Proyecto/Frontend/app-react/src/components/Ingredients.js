import React, { Component } from "react";

    
    const Ingredients = ({ ingredients }) => {
      return (
        <div>
          <center><h1>ingredients</h1></center>
          {ingredients.map((ingredient) => (
            <div>
                <h5 class="card-title">{ingredient.name/*['hydra:member'][0].name*/}</h5>
              </div>
          ))}
        </div>
      )
    };
    
    export default Ingredients