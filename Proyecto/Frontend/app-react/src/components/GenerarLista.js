import React, { Component } from "react";
import axios from "axios";

export default class GenerarLista extends Component {
  recogeRecetas = async () => {
    await axios.get("https://127.0.0.1:8000/recipes").then((response) => {
      console.log(response.data["hydra:member"]);
    });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.recogeRecetas()}
          type="button"
        >
          Mostrar recetas!
        </button>
      </div>
    );
  }
}
