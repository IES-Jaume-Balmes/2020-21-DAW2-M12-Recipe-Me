import React, { Component } from "react";
import "../css/Recetas.css";
import TarjetaLista from "./Cards/TarjetaLista";
import TarjetaListaActual from "./Cards/TarjetaListaActual";
import { withStyles } from "@material-ui/core/styles";
import Cookie from "universal-cookie";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import jwt_decode from "jwt-decode";

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
});

class Listas extends Component {
  state = {
    listas: [],
    textField: "",
  };

  handleText = async (e) => {
    this.setState({
      textField: e.target.value,
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
      });
  }

  eliminar = (id) => {
    const newList = this.state.listas.filter((item) => {
      return item.id !== id;
    });
    this.setState({ listas: newList });
    axios.delete(baseDeleteUrl + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  // GUARDAMOS LISTA DE LA COMPRA
  guardarListaCompra = async () => {
    var tokenDecoded = jwt_decode(token);
    console.log(tokenDecoded);
    let arraySoloId = arrayIngres.map((i) => i.id);
    //console.log(arraySoloId);
    let jsonPeticion = {
      propietario: "api/users/" + tokenDecoded.userId,
      name: this.state.textField,
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
        alert("Lista guardada correctamente");
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
        console.log(jsonPeticion);
        alert("Ha ocurrido un error");
      });
  };

  validateForm() {
    return this.state.textField != "";
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="space-around">
        <Grid item xs={4}>
          <form noValidate autoComplete="off" className="mb-3">
            <TextField
              id="outlined-basic"
              onChange={this.handleText}
              label="Lista Actual"
              variant="outlined"
            />
          </form>
          <div className={classes.postIt}></div>
          <div className={classes.postItNaranja}></div>
          <div className={classes.listaIngredientes}>
            <TarjetaListaActual className="m-2" arrayIngres={arrayIngres} />
          </div>
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
        <Grid item xs={4}>
          <h1>Listas Guardadas</h1>
          <div className={classes.oldListas}>
            {this.state.listas.map((element) => (
              <TarjetaLista
                key={element.id}
                lista={element}
                eliminar={this.eliminar}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Listas);
