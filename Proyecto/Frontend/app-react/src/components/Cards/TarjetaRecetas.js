import React from "react";

const TarjetaRecetas = ({ recetas }) => {
  return (
    <div>
      {recetas.map((receta) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{receta.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{receta.description}</h6>
            <ul>
              {receta.ingredients.map((ingre) => {
                return <li>{ingre.name}</li>;
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaRecetas;
