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

const cookie = new Cookie();
let arrayIngres = cookie.get("ingredientes");
const baseUrl = "https://127.0.0.1:8000/lista_compras";

const baseDeleteUrl = 'https://127.0.0.1:8000/lista_compras/';

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

  componentDidMount() {
    fetch("https://127.0.0.1:8000/lista_compras")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ listas: data["hydra:member"] });
      });
  }

  eliminar = (id) => {
    const newList = this.state.listas.filter((item) => {
      return item["@id"] !== id;
    });
    this.setState({ listas: newList });
    axios.delete(baseDeleteUrl + id.split("/")[2]);
  };

  guardarListaCompra = async() => {
    let arraySoloId = arrayIngres.map((i) => i.id);
    console.log(arraySoloId);
    let jsonPeticion = {
      propietario: "/users/" + cookie.get("user"),
      name: this.state.textField,
      ingredients: arraySoloId,
    };
    
    console.log(jsonPeticion);
    await axios
      .post(baseUrl, jsonPeticion)
      .then((response) => {
        console.log(response.data);
        alert("Receta creada correctamente");
      })
      .catch((error) => {
        console.log(error);
        alert("Ha ocurrido un error");
      });
  };
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
          >
            Guardar lista de la compra
          </Button>
        </Grid>
        <Grid item xs={4}>
          <h1>Listas Guardadas</h1>
          <div className={classes.oldListas}>
            {this.state.listas.map((element) => (
              <TarjetaLista
                key={element["@id"]}
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
