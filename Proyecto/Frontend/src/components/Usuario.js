import React, { Component, Fragment } from "react";
import "../css/Recetas.css";
import TarjetaUser from "./Cards/TarjetaUser";
import Cookie from "universal-cookie";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const cookie = new Cookie();

const styles = (theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export default class Usuario extends Component {
  state = {
    usuario: {},
  };

  cerrarSesion = () => {
    cookie.remove("user", { path: "/" });
    cookie.remove("username", { path: "/" });
    cookie.remove("ingredientes", { path: "/" })

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
    const { classes } = this.props;
    return (
      <>
        <Grid container xs={12} justify="space-around">
          <Grid item xs={4}>
            <TarjetaUser usuario={this.state.usuario} />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.cerrarSesion()}
            >
              Cerrar Sesión
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
}
