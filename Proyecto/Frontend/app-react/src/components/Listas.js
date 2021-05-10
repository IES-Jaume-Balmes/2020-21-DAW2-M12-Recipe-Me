import React, { Component } from "react";
import "../css/Recetas.css";
import TarjetaLista from "./TarjetaLista";

export default class Listas extends Component {
  state = {
    listas: [],
  };

  componentDidMount() {
    fetch("https://127.0.0.1:8000/lista_compras")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ listas: data["hydra:member"] });
      })
      .catch(console.log);
  }

  render() {
    return <TarjetaLista listas={this.state.listas} />;
  }
}
