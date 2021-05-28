import React, { Component, Fragment } from "react";
import "../css/Recetas.css";
import TarjetaUser from "./Cards/TarjetaUser";
import Cookie from "universal-cookie";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { axiosIntercepted } from "../index";

const cookie = new Cookie();
const token = cookie.get("token");

/*const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#FDF0A0",
  },
}));*/

export default class Usuario extends Component {
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseByeBye = async () => {
    this.setState({ open: false });
    var tokenDecoded = jwt_decode(token);
    const deleteUsuario = `https://127.0.0.1:8000/api/users/${tokenDecoded.userId}`;
    //console.log(deleteUsuario);
    await axiosIntercepted
      .delete(deleteUsuario)
      .then((response) => {
        // console.log(response.data);
        this.cerrarSesion();
      })
      .catch(function (error) {
        if (error.response.data.message === "Expired JWT Token") {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  state = {
    usuario: {},
    open: false,
    loading: true,
    color: "#3F51B6",
    ingredientesUsados: 0,
    numeroListas: 0,
  };

  cerrarSesion = () => {
    cookie.remove("ingredientes", { path: "/" });
    cookie.remove("token", { path: "/" });
    cookie.remove("refresh_token", { path: "/" });
    window.location.href = "./login";
  };

  async componentDidMount() {
    var tokenDecoded = jwt_decode(token);
    const profileEndpoint = `https://127.0.0.1:8000/api/users/${tokenDecoded.userId}`;
    axiosIntercepted
      .get(profileEndpoint)
      .then((response) => {
        this.setState({ usuario: response.data });
        this.setState({ loading: false });
        this.datosUser();
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        // console.log(error.config);
      });
  }

  datosUser() {
    let listas = this.state.usuario.listaCompras;
    let contador = 0;

    for (let i = 0; i < listas.length; i++) {
      for (let j = 0; j < listas[i].ingredients.length; j++) {
        contador++;
      }
      this.setState({ ingredientesUsados: contador });
      this.setState({ numeroListas: this.state.usuario.listaCompras.length });
    }
    console.log(this.state.numeroListas);
  }

  render() {
    return (
      <>
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item xs={12} md={6}>
            <TarjetaUser
              usuario={this.state.usuario}
              numeroListas={this.state.numeroListas}
              numeroIngredientes={this.state.ingredientesUsados}
              cerrarSesion={this.cerrarSesion}
              handleClickOpen={this.handleClickOpen}
            />
          </Grid>
          {/*
          <Grid item   >
            <Grid>
              <Grid item>
                <h3>{this.state.numeroListas}</h3>
                </Grid>
              <Grid>Listas Guardadas</Grid>
            </Grid>
            <Grid item>
              <div>
                <h3>{this.state.ingredientesUsados}</h3>
              </div>

              <div>Ingredientes Usados</div>
            </Grid>
          </Grid>*/}
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Darse de baja en Recipe-Me"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Todos sus datos y recetas se eliminarán para siempre. ¿Estás
                seguro?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                No
              </Button>
              <Button
                onClick={this.handleCloseByeBye}
                color="primary"
                autoFocus
              >
                Sí
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </>
    );
  }
}
