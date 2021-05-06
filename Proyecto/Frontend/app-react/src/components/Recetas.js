import React, { Component } from "react";
import "../css/Recetas.css";

export default class Recetas extends Component {
  recetasTemp = [
    {
      id: "1",
      name: "tortilla de patatas",
      description: "patata amarilla",
      ingredients: [
        {
          id: "1",
          name: "patatas",
        },
        {
          id: "2",
          name: "huevos",
        },
      ],
    },
    {
      id: "2",
      name: "Estofado de carne",
      description: "Es estofado!!!",
      ingredients: [
        {
          id: "3",
          name: "carne",
        },
        {
          id: "4",
          name: "Agua",
        },
      ],
    },
  ];

  render() {
    return (
      <div>
        {this.recetasTemp.map((rece) => {
          return (
            <div className="recetas__card">
              <h2>{rece.name}</h2>
              <h5>{rece.description}</h5>
              <div>Ingredientes</div>
              <ul>
                  {rece.ingredients.map((ingre)=>{
                      return <li>{ingre.name}</li>;
                  })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
