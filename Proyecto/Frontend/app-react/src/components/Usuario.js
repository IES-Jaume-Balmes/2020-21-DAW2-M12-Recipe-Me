import React, { Component, Fragment } from "react";
import "../css/Recetas.css";
import TarjetaUser from "./Cards/TarjetaUser";
import Cookie from "universal-cookie";
import Button from "@material-ui/core/Button";

const cookie = new Cookie();

export default class Usuario extends Component {
  state = {
    usuario: {},
  };

  cerrarSesion = () => {
    cookie.remove("user", { path: "/" });
    cookie.remove("username", { path: "/" });

    window.location.href = "./login";
  };

  componentDidMount() {
    let idUser = cookie.get("user");

    fetch(`https://127.0.0.1:8000/users/${idUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ usuario: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <>
        <TarjetaUser usuario={this.state.usuario} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.cerrarSesion()}
        >
          Cerrar Sesión
        </Button>
      </>
    );
  }
}
