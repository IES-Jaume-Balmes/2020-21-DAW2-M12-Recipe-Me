import React, { Component } from "react";
import "../css/Recetas.css";
import TarjetaLista from "./Cards/TarjetaLista";
import { TarjetaListaActual } from "./Cards/TarjetaListaActual";

export default class Listas extends Component {
  state = {
    listas: [],
  };

  componentDidMount() {
    fetch("https://127.0.0.1:8000/lista_compras")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ listas: data["hydra:member"] });
      });
  }

  render() {
    return (
      <>
        <h1>Lista Actual</h1>
        <TarjetaListaActual />
        <h1>Listas Guardadas</h1>
        <TarjetaLista listas={this.state.listas} />
      </>
    );
  }
}
