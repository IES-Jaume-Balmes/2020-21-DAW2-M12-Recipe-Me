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
import axios from "axios";

const cookie = new Cookie();
const token = cookie.get("token");

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
    console.log(deleteUsuario);
    await axios
      .delete(deleteUsuario,{
        headers:{
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.cerrarSesion();
      })
      .catch((error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      });
  };

  state = {
    usuario: {},
    open: false,
    loading: true,
    color: "#3F51B6",
  };

  cerrarSesion = () => {
    cookie.remove("ingredientes", { path: "/" });
    cookie.remove("token", { path: "/" });

    window.location.href = "./login";
  };

  async componentDidMount() {
    var tokenDecoded = jwt_decode(token);
    const profileEndpoint = `https://127.0.0.1:8000/api/users/${tokenDecoded.userId}`;
    await axios
      .get(profileEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({ usuario: response.data });
          this.setState({ loading: false });
        } else {
          console.log(response);
        }
      });
  }

  render() {
    

    return (
      <>
        <Grid container justify="space-around">
          <Grid item xs={8}>
            <TarjetaUser usuario={this.state.usuario} />
          </Grid>
          <Grid
            item
            xs={4}
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.cerrarSesion()}
            >
              Cerrar Sesión
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClickOpen}
            >
              Darse de baja
            </Button>
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
        </Grid>
      </>
    );
  }
}
