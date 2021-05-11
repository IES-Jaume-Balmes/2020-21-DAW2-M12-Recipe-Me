import React, { Component } from "react";
import "../css/Recetas.css";
import TarjetaUser from "./Cards/TarjetaUser";
import RecipeCard from "./Cards/RecipeCard";

export default class Usuario extends Component {
  state = {
    usuario: {},
  };

  componentDidMount() {
    fetch("https://127.0.0.1:8000/users/284")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ usuario: data });
      })
      .catch(console.log);
  }

  render() {
    return <TarjetaUser usuario={this.state.usuario} />;
  }
}
