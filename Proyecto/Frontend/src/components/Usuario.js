import React, { Component, Fragment } from "react";
import "../css/Recetas.css";
import TarjetaUser from "./Cards/TarjetaUser";
import Cookie from "universal-cookie";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const cookie = new Cookie();

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
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({open:false});
  };

  state = {
    usuario: {},
    open: false,
  };

  cerrarSesion = () => {
    cookie.remove("user", { path: "/" });
    cookie.remove("username", { path: "/" });
    cookie.remove("ingredientes", { path: "/" });

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
    //const { classes } = this.props;
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

            {/*<Button
              variant="contained"
              color="secondary">
              Darse de baja
            </Button>*/}
            <Button
              variant="outlined"
              color="primary"
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
                  Todos sus datos y recetas se eliminarán para siempre.
                  ¿Estás seguro?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  No
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
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
