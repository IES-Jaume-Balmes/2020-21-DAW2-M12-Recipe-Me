import React, { Component, useState } from "react";
import "../css/Recetas.css";
import TarjetaLista from "./Cards/TarjetaLista";
import TarjetaListaActual from "./Cards/TarjetaListaActual";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
//   oldLists: {
//     border: "1px solid red",
//   },
// }));

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
    textField: "k",
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
            <TarjetaListaActual titulo={this.state.textField} className="m-2" />
          </div>
          <Button variant="contained" color="primary" className="mt-3">
            Guardar lista de la compra
          </Button>
        </Grid>
        <Grid item xs={4}>
          <h1>Listas Guardadas</h1>
          <div className={classes.oldListas}>
            {this.state.listas.map((element) => (
              <TarjetaLista key={element["@id"]} lista={element} />
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Listas);
