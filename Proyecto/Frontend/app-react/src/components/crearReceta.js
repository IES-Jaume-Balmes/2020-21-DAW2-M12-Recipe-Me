import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TarjetaIngredients from "./Cards/TarjetaIngredients";
const baseUrl = "https://localhost:8000/ingredients";

export default class CrearReceta extends Component {
  state = {
    ingredients: [],
  };

  componentDidMount() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ingredients: data["hydra:member"] });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        CREAR RECETA
        <div>
          <h1>Receta</h1>

          <input name="titulo" className="form-control my-2" />
        </div>
        <TarjetaIngredients ingredients={this.state.ingredients} />
      </div>
    );
  }
}
