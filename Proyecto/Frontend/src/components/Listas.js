import React, { Component,useState } from "react";
import "../css/Recetas.css";
import TarjetaLista from "./Cards/TarjetaLista";
import TarjetaListaActual from "./Cards/TarjetaListaActual";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default class Listas extends Component {
   
  state = {
    listas: [],
    classes: useStyles,
    textField:"k"
  };

  handleText = async (e)=>{
    this.setState({
      textField: e.target.value
    })
  }

  componentDidMount() {
    fetch("https://127.0.0.1:8000/lista_compras")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ listas: data["hydra:member"] });
      });
  }



  render() {
    return (
      <>
        <form className={this.state.classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" onChange={this.handleText} label="Lista Actual"  variant="outlined" />
        </form>
        <TarjetaListaActual titulo={this.state.textField} className="m-2"/>
        <h1>Listas Guardadas</h1>
        <TarjetaLista listas={this.state.listas} />
      </>
    );
  }
}
