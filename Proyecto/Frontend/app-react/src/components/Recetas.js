import React, { Component } from "react";
import "../css/Recetas.css";
import axios from "axios";
import TarjetaRecetas from "./TarjetaRecetas";

export default class Recetas extends Component {
  state = {
    recetas: [],
  };

  componentDidMount() {
    fetch("https://127.0.0.1:8000/recipes")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ recetas: data["hydra:member"] });
      })
      .catch(console.log);
  }

  render() {
    return <TarjetaRecetas recetas={this.state.recetas} />;
  }
}
