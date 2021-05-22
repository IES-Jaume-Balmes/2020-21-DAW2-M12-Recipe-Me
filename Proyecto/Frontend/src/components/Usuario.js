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
import CircleLoader from "react-spinners/CircleLoader";

const cookie = new Cookie();
const token = cookie.get("token");

/* const styles = (theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}); */

/*const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };*/

export default class Usuario extends Component {
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseByeBye = async () => {
    this.setState({ open: false });
    const deleteUsuario = "https://127.0.0.1:8000/users/" + cookie.get("user");
    console.log(deleteUsuario);
    await axios
      .delete(deleteUsuario)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      });
    cookie.remove("user", { path: "/" });
    cookie.remove("username", { path: "/" });
    cookie.remove("ingredientes", { path: "/" });
    window.location.href = "./login";
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
    //const { classes } = this.props;
    if (this.state.isLoading) return <CircleLoader color={this.state.color} />;

    return (
      <>
        <Grid container xs={12} justify="space-around">
          <Grid item xs={4}>
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
