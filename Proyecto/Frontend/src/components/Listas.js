import React, { Component } from "react";
import "../css/Recetas.css";
import TarjetaLista from "./Cards/TarjetaLista";
import TarjetaListaActual from "./Cards/TarjetaListaActual";
import { withStyles } from "@material-ui/core/styles";
import Cookie from "universal-cookie";
import TextField from "@material-ui/core/TextField";
import { Grid, Snackbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Alert from "@material-ui/lab/Alert";
import { RefreshToken } from "./utils/refreshToken";

const cookie = new Cookie();
let arrayIngres = cookie.get("ingredientes");
const listasEndPoint = "https://127.0.0.1:8000/api/lista_compras";

const baseDeleteUrl = "https://127.0.0.1:8000/api/lista_compras/";
let token = cookie.get("token");

const styles = (theme) => ({
  oldListas: {
    overflowY: "scroll",
    width: "500px",
    float: "left",
    height: "500px",
    position: "relative",
  },
  listaIngredientes: {
    overflowY: "scroll",
    width: "500px",
    float: "left",
    height: "400px",
    position: "relative",
  },
  lista: {
    margin: "15px",
  },
  postIt: {
    transform: "rotate(3deg)",
    transformOrigin: "20% 40%",
    background: "#D76BCB",
    height: "420px",
    width: "400px",
    position: "absolute",
  },
  postItNaranja: {
    transform: "rotate(-5deg)",
    transformOrigin: "20% 40%",
    background: "#FD9B0C",
    height: "420px",
    width: "400px",
    position: "absolute",
  },
  gridListaActual: {
    margin: "20px",
  },
});

class Listas extends Component {
  state = {
    listas: [],
    nombreLista: "",
    open: false,
    arrayIngredientes: arrayIngres,
  };

  handleText = async (e) => {
    this.setState({
      nombreLista: e.target.value,
    });
  };

  // OBTENEMOS LISTAS GUARDADAS
  async componentDidMount() {
    var tokenDecoded = jwt_decode(token);
    const userEndpoint = `https://127.0.0.1:8000/api/users/${tokenDecoded.userId}.json`;
    await axios
      .get(userEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({ listas: response.data.listaCompras });
        } else {
          console.log(response);
        }
      })
      .catch(function (error) {
        if (error.response.data.message === "Expired JWT Token") {
          console.log(error.response.data);
          RefreshToken();
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        // console.log(error.config);
      });
  }

  eliminar = (id) => {
    const newList = this.state.listas.filter((item) => {
      return item.id !== id;
    });
    this.setState({ listas: newList });
    axios
      .delete(baseDeleteUrl + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch(function (error) {
        if (error.response.data.message === "Expired JWT Token") {
          console.log(error.response.data);
          RefreshToken();
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        // console.log(error.config);
      });
  };

  // GUARDAMOS LISTA DE LA COMPRA
  guardarListaCompra = async () => {
    var tokenDecoded = jwt_decode(token);
    console.log(tokenDecoded);
    let arraySoloId = this.state.arrayIngredientes.map((i) => i.id);
    //console.log(arraySoloId);
    let jsonPeticion = {
      propietario: "api/users/" + tokenDecoded.userId,
      name: this.state.nombreLista,
      ingredients: arraySoloId,
    };

    console.log(jsonPeticion);
    await axios
      .post(listasEndPoint, jsonPeticion, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ open: true });
        this.componentDidMount();
      })
      .catch(function (error) {
        if (error.response.data.message === "Expired JWT Token") {
          console.log(error.response.data);
          RefreshToken();
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        // console.log(error.config);
      });
  };

  validateForm() {
    return this.state.nombreLista !== "";
  }

  actualizarLista = (id) => {
    //console.log(id)
    const newList = this.state.arrayIngredientes.filter((item) => {
      return item.id !== id;
    });
    this.setState({ arrayIngredientes: newList });
    //console.log(this.state.arrayIngredientes)
  };

  cargarListaGuardada = (lista) => {
    console.log(this.state.arrayIngredientes);
    console.log(lista);
    this.setState({ nombreLista: lista.name });
    this.setState({ arrayIngredientes: lista.ingredients });
    console.log(lista.ingredients);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="space-around">
        <Grid item xs={12}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={() => {
              this.setState({ open: false });
            }}
          >
            <Alert
              onClose={() => {
                this.setState({ open: false });
              }}
              severity="success"
            >
              Lista añadida correctamente!
            </Alert>
          </Snackbar>
        </Grid>
        <Grid item md={6}>
          <form noValidate autoComplete="off" className="mb-3">
            <Grid container>
              <Grid item xs={12} className={classes.gridListaActual}>
                <TextField
                  value={this.state.nombreLista}
                  id="outlined-basic"
                  onChange={this.handleText}
                  label="Lista Actual"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} className={classes.gridListaActual}>
                <div className={classes.postIt}></div>
                <div className={classes.postItNaranja}></div>
                <div className={classes.listaIngredientes}>
                  <TarjetaListaActual
                    className="m-2"
                    arrayIngres={this.state.arrayIngredientes}
                    actualizar={this.actualizarLista}
                  />
                </div>
              </Grid>
              <Grid item xs={12} className={classes.gridListaActual}>
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-3"
                  onClick={this.guardarListaCompra}
                  disabled={!this.validateForm()}
                >
                  Guardar lista de la compra
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={6}>
          <h1>Listas Guardadas</h1>
          <div className={classes.oldListas}>
            {this.state.listas.map((element) => (
              <TarjetaLista
                key={element.id}
                lista={element}
                eliminar={this.eliminar}
                cargar={this.cargarListaGuardada}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Listas);
